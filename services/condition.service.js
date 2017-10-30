import _ from 'lodash'
import shortid from 'shortid'
import Condition from '../models/condition'

class ConditionService {
  get (patientId, clinicalStatusParam) {
    if (!clinicalStatusParam) clinicalStatusParam = 'active,resolved,remission'
    var clinicalStatus = _.split(clinicalStatusParam, ',')
    const reg = 'Patient/' + patientId
    return Condition.find({'patient.reference': reg, 'clinicalStatus': { $in: clinicalStatus }, 'verificationStatus': { $ne: 'entered-in-error' }}).then(result => {
      // TODO: Look into the right way to bundle this
      return {
        entry: _.map(result, (re) => { return { resource: re } })
      }
    })
  }

  save (condition) {
    delete condition._id
    if (!condition.id) {
      condition.id = shortid.generate().toLowerCase()
      delete condition.__v
    }
    return Condition.findOneAndUpdate({
      id: condition.id
    }, condition, {upsert: true, 'new': true}).then(result => {
      console.log(result)
      result.meta = {
        versionId: result.__v,
        lastUpdated: new Date()
      }
      return result
    })
  }
}

export default new ConditionService()

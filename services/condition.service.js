import _ from 'lodash'
import shortid from 'shortid'
import Condition from '../models/condition'
import BaseService from './base.service'

class ConditionService extends BaseService {
  get (patientId, clinicalStatusParam) {
    if (!clinicalStatusParam) clinicalStatusParam = 'active,resolved,remission'
    var clinicalStatus = _.split(clinicalStatusParam, ',')
    const reg = 'Patient/' + patientId
    const request = {'patient.reference': reg, 'clinicalStatus': { $in: clinicalStatus }, 'verificationStatus': { $ne: 'entered-in-error' }}
    return super.request(Condition, request)
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

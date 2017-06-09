import _ from 'lodash'
import Observation from '../models/observation'

class ObervationService {
  get (req) {
    const patientId = 'Patient/' + req.query.patientId
    let promise = {}
    if (req.query.code) {
      promise = this._getByCode(patientId, req.query.code)
    } else if (req.query.category) {
      promise = this._getByCategory(patientId, req.query.category)
    } else {
      promise = this._getAll(patientId)
    }

    return promise.then(function (result) {
      // TODO: Look into the right way to bundle this
      return {
        id: '651f6ccc-2ceb-4098-9296-a4731fb2065a',
        resourceType: 'Bundle',
        type: 'searchset',
        link: [
          {
            relation: 'self',
            url: ''
          }
        ],
        entry: _.map(result, re => { return { resource: re } })
      }
    })
  }

  _getAll (patientId) {
    return Observation.find({ 'patient.subject': patientId }).then(result => {
      return result
    })
  }

  _getByCode (patientId, code) {
    const codeArray = _.compact(_.map(code.split(','), c => {
      const index = c.indexOf('|')
      if (index < 0) return
      const searchCode = c.substring(index + 1)
      return searchCode
    }))
    return Observation.find({ 'code.coding.code': { $in: codeArray } })
  }

  _getByCategory (patientId, category) {
    const catArray = _.compact(category.replace('http://hl7.org/fhir/observation-category', '').split('|'))
    return Observation.find({ 'category.coding.code': { $in: catArray } })
  }
}

export default new ObervationService()

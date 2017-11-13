import _ from 'lodash'
import Observation from '../models/observation'
import Bundle from '../models/bundle'
import encrypter from 'object-encrypter'
const engine = encrypter(process.env.SECRET, {outputEncoding: 'hex'})
const COUNT = 100

class ObervationService {
  get (req) {
    let promise = {}
    const requestObject = this._parseRequestObject(req)
    const patientId = 'Patient/' + requestObject.patientId
    if (requestObject.code) {
      promise = this._getByCode(patientId, requestObject)
    } else if (requestObject.category) {
      promise = this._getByCategory(patientId, requestObject)
    } else {
      promise = this._getAll(patientId, requestObject)
    }

    return promise.then(result => {
      return new Bundle(result, requestObject)
    })
  }

  _getAll (patientId, request) {
    return Observation.find({ 'patient.subject': patientId }).skip(request._count * request._page).limit(request._count).then(result => {
      return result
    })
  }

  _getByCode (patientId, request) {
    const codeArray = _.compact(_.map(request.code.split(','), c => {
      const index = c.indexOf('|')
      if (index < 0) return
      const searchCode = c.substring(index + 1)
      return searchCode
    }))
    return Observation.find({ 'code.coding.code': { $in: codeArray } }).skip(request._count * request._page).limit(request._page)
  }

  _getByCategory (patientId, request) {
    if (!request._page) request._page = 0
    const catArray = _.compact(request.category.replace('http://hl7.org/fhir/observation-category', '').split('|'))
    const catRequest = { 'category.coding.code': { $in: catArray } }
    return Observation.find(catRequest).skip(COUNT * request._page)
      .limit(COUNT).then(data => {
        return Observation.count(catRequest).then(count => {
          return {data: data, total: count}
        })
      })
  }

  _parseRequestObject (req) {
    const query = req.query
    let request = {code: query.code, category: query.category, patientId: query.patient}
    request.protocol = req.protocol
    request.originalUrl = req.baseUrl
    request.host = req.hostname
    request.port = 3000
    if (query['-pageContext'] && query['-pageDirection']) {
      const direction = query['-pageDirection']
      const context = query['-pageContext']
      const parsedContext = engine.decrypt(context)
      request.category = parsedContext.category
      request._page = parsedContext._page
      if (direction === 'NEXT') request._page++
      else if (direction === 'PREVIOUS' && request._page) request._page--
    } else {
      request._count = COUNT
      request._page = 0
    }
    return request
  }
}

export default new ObervationService()

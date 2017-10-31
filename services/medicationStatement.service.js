import _ from 'lodash'
import MedicationStatement from '../models/medicationStatement'
import BaseService from './base.service'

class MedicationStatementService extends BaseService {
  get (query) {
    let criteria = {}
    let status = ['active', 'completed']
    criteria['patient.reference'] = ['Patient/', query.patient].join('')
    if (query.status) status = _.split(query.status, ',')
    criteria['status'] = { $in: status }
    return super.request(MedicationStatement, criteria)
  }
}

export default new MedicationStatementService()

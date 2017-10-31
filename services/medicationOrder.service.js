import _ from 'lodash'
import MedicationOrder from '../models/medicationOrder'
import BaseService from './base.service'

class MedicationOrderService extends BaseService {
  get (query) {
    let criteria = {}
    let status = ['active', 'draft']
    criteria['patient.reference'] = ['Patient/', query.patient].join('')
    if (query.status) status = _.split(query.status, ',')
    criteria['status'] = { $in: status }
    return super.request(MedicationOrder, criteria)
  }
}

export default new MedicationOrderService()

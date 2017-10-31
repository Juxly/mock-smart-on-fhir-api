import Immunization from '../models/immunization'
import Utils from '../models/utils'
import BaseService from './base.service'

class ImmunizationService extends BaseService {
  get (query) {
    let criteria = {}
    criteria['patient.reference'] = ['Patient/', query.patient].join('')
    if (query.date) criteria['date'] = Utils.dateFromQuery(query.date)
    return super.request(Immunization, criteria)
  }
}

export default new ImmunizationService()

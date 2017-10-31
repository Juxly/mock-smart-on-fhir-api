import Encounter from '../models/encounter'
import BaseService from './base.service'

class EncounterService extends BaseService {
  get (query) {
    let criteria = {}
    criteria['patient.reference'] = ['Patient/', query.patient].join('')
    return super.request(Encounter, criteria)
  }
}

export default new EncounterService()

import Allergy from '../models/allergy'
import BaseService from './base.service'

class AllergyService extends BaseService {
  get (patientId) {
    const reg = 'Patient/' + patientId
    return super.request(Allergy, {'patient.reference': reg})
  }
}

export default new AllergyService()

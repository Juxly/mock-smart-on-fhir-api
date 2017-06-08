import Patient from '../models/patient'

class PatientService {
  get (patientId) {
    return Patient.findOne({id: patientId}).exec()
  }
}

export default new PatientService()

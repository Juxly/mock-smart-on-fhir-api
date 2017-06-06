import mockPatient from '../mock/patient.json'

class PatientService {
  get (patientId) {
    return mockPatient
  }
}

export default new PatientService()

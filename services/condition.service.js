import mockConditions from '../mock/condition.json'

class ConditionService {
  get (patientId) {
    return mockConditions
  }
}

export default new ConditionService()

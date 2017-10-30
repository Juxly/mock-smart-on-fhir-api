import _ from 'lodash'
import Allergy from '../models/allergy'

class AllergyService {
  get (patientId) {
    const reg = 'Patient/' + patientId
    return Allergy.find({'patient.reference': reg}).then(result => {
      // TODO: Look into the right way to bundle this
      return {
        entry: _.map(result, (re) => { return { resource: re } })
      }
    })
  }
}

export default new AllergyService()

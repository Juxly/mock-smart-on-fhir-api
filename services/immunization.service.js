import _ from 'lodash'
import Immunization from '../models/immunization'
import Utils from '../models/utils'

class ImmunizationService {
  get (query) {
    let criteria = {}
    criteria['patient.reference'] = ['Patient/', query.patient].join('')
    if (query.date) criteria['date'] = Utils.dateFromQuery(query.date)
    return Immunization.find(criteria).then(result => {
      // TODO: Look into the right way to bundle this
      return {
        entry: _.map(result, (re) => { return { resource: re } })
      }
    })
  }
}

export default new ImmunizationService()

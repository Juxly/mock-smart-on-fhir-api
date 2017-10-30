import _ from 'lodash'
import Procedure from '../models/procedure'
import Utils from '../models/utils'

class ProcedureService {
  get (query) {
    let criteria = {}
    if (query.subject) criteria['subject.reference'] = _.replace(query.subject, '=', '/')
    else if (query.patient) criteria['subject.reference'] = ['Patient/', query.patient].join('')
    if (query.date) criteria['performedDateTime'] = Utils.dateFromQuery(query.date)
    return Procedure.find(criteria).then(result => {
      // TODO: Look into the right way to bundle this
      return {
        entry: _.map(result, (re) => { return { resource: re } })
      }
    })
  }
}

export default new ProcedureService()

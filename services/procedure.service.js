import _ from 'lodash'
import Procedure from '../models/procedure'

class ProcedureService {
  get (query) {
    let criteria = {}
    if (query.subject) criteria['subject.reference'] = _.replace(query.subject, '=', '/')
    else if (query.patient) criteria['subject.reference'] = ['Patient/', query.patient].join('')
    if (query.date) {
      criteria['performedDateTime'] = {}
      let split = query.date.split(',')
      if (!split) split = [query.date]
      _.forEach(split, (s) => {
        if (_.includes(s, 'le')) criteria['performedDateTime'].$lte = new Date(_.replace(s, 'le', ''))
        if (_.includes(s, 'ge')) criteria['performedDateTime'].$gte = new Date(_.replace(s, 'ge', ''))
      })
    }
    return Procedure.find(criteria).then(result => {
      // TODO: Look into the right way to bundle this
      return {
        entry: _.map(result, (re) => { return { resource: re } })
      }
    })
  }
}

export default new ProcedureService()

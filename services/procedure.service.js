import _ from 'lodash'
import Procedure from '../models/procedure'
import Utils from '../models/utils'
import BaseService from './base.service'

class ProcedureService extends BaseService {
  get (query) {
    let criteria = {}
    if (query.subject) criteria['subject.reference'] = _.replace(query.subject, '=', '/')
    else if (query.patient) criteria['subject.reference'] = ['Patient/', query.patient].join('')
    if (query.date) criteria['performedDateTime'] = Utils.dateFromQuery(query.date)
    return super.request(Procedure, criteria)
  }
}

export default new ProcedureService()

import _ from 'lodash'
import DiagnosticReport from '../models/diagnosticReport'
import BaseService from './base.service'

class DiagnosticReportService extends BaseService {
  get (query) {
    let criteria = {}
    if (query.subject) criteria['subject.reference'] = _.replace(query.subject, '=', '/')
    else if (query.patient) criteria['subject.reference'] = ['Patient/', query.patient].join('')
    return super.request(DiagnosticReport, criteria)
  }
}

module.exports = new DiagnosticReportService()

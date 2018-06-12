import BaseSeeder from './baseSeeder.seeder'
import _ from 'lodash'
import Model from '../models/diagnosticReport'

export default class DiagnosticReportSeeder extends BaseSeeder {
  constructor () {
    super('diagnosticReport', Model)
    this.data = _.map(this.data[0].entry, 'resource')
  }
}

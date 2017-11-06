import { Seeder } from 'mongoose-data-seed'
import _ from 'lodash'
import Model from '../models/diagnosticReport'
import diagnosticReportMock from '../mock/diagnosticReport'

const data = _.map(diagnosticReportMock.entry, 'resource')

export default class DiagnosticSeeder extends Seeder {
  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    return Model.create(data)
  }
}

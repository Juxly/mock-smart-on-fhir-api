import { Seeder } from 'mongoose-data-seed'
import _ from 'lodash'
import Model from '../models/medicationStatement'
import medicationStatementMock from '../mock/medicationStatement'

const data = _.map(medicationStatementMock.entry, 'resource')

export default class MedicationStatementSeeder extends Seeder {
  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    return Model.create(data)
  }
}

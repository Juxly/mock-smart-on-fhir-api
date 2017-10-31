import { Seeder } from 'mongoose-data-seed'
import _ from 'lodash'
import Model from '../models/medicationOrder'
import medicationOrderMock from '../mock/medicationOrder'

const data = _.map(medicationOrderMock.entry, 'resource')

export default class MedicationOrderSeeder extends Seeder {
  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    return Model.create(data)
  }
}

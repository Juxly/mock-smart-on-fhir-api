import { Seeder } from 'mongoose-data-seed'
import _ from 'lodash'
import Model from '../models/immunization'
import immunizationMock from '../mock/immunization'

const data = _.map(immunizationMock.entry, 'resource')

export default class ImmunizationSeeder extends Seeder {
  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    return Model.create(data)
  }
}

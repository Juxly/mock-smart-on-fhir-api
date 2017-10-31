import { Seeder } from 'mongoose-data-seed'
import _ from 'lodash'
import Model from '../models/encounter'
import encounterMock from '../mock/encounter'

const data = _.map(encounterMock.entry, 'resource')

export default class EncounterSeeder extends Seeder {
  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    return Model.create(data)
  }
}

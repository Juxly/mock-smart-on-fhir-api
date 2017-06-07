import { Seeder } from 'mongoose-data-seed'
import Model from '../models/observation'
import observationMock from '../mock/observation'
import _ from 'lodash'

const data = _.map(observationMock.entry, 'resource')

export default class ObservationsSeeder extends Seeder {
  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    return Model.create(data)
  }
}

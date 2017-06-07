import { Seeder } from 'mongoose-data-seed'
import _ from 'lodash'
import Model from '../models/condition'
import conditionMock from '../mock/condition'

const data = _.map(conditionMock.entry, 'resource')

export default class ConditionsSeeder extends Seeder {
  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    return Model.create(data)
  }
}

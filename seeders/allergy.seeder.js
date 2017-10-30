import { Seeder } from 'mongoose-data-seed'
import _ from 'lodash'
import Model from '../models/allergy'
import allergyMock from '../mock/allergy'

const data = _.map(allergyMock.entry, 'resource')

export default class AllergySeeder extends Seeder {
  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    return Model.create(data)
  }
}

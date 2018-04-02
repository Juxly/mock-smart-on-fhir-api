import { Seeder } from 'mongoose-data-seed'
import _ from 'lodash'
import Model from '../models/practitioner'
import pracMock from '../mock/practitioner'

const data = pracMock

export default class PractitionerSeeder extends Seeder {
  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    return Model.create(data)
  }
}

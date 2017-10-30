import { Seeder } from 'mongoose-data-seed'
import _ from 'lodash'
import Model from '../models/procedure'
import procedureMock from '../mock/procedure'

const data = _.map(procedureMock.entry, 'resource')

export default class ProcedureSeeder extends Seeder {
  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    return Model.create(data)
  }
}

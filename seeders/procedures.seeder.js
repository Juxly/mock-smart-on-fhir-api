import BaseSeeder from './baseSeeder.seeder'
import _ from 'lodash'
import Model from '../models/procedure'

export default class ProcedureSeeder extends BaseSeeder {
  constructor () {
    super('procedure', Model)
    this.data = _.map(this.data[0].entry, 'resource')
  }
}

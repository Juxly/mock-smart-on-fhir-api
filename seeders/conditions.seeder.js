import BaseSeeder from './baseSeeder.seeder'
import _ from 'lodash'
import Model from '../models/condition'

export default class ConditionSeeder extends BaseSeeder {
  constructor () {
    super('condition', Model)
    this.data = _.map(this.data[0].entry, 'resource')
  }
}

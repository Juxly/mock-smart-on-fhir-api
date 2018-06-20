import BaseSeeder from './baseSeeder.seeder'
import _ from 'lodash'
import Model from '../models/condition'

export default class ConditionSeeder extends BaseSeeder {
  constructor () {
    super('condition', Model)
    this.data = _.map(this.data, 'entry')
    this.data = _.flatten(this.data)
    this.data = _.map(this.data, 'resource')
  }
}

import BaseSeeder from './baseSeeder.seeder'
import _ from 'lodash'
import Model from '../models/observation'

export default class ObservationsSeeder extends BaseSeeder {
  constructor () {
    super('observation', Model)
    this.data = _.map(this.data[0].entry, 'resource')
  }
}

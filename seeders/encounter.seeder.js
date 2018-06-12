import BaseSeeder from './baseSeeder.seeder'
import _ from 'lodash'
import Model from '../models/encounter'

export default class EncounterSeeder extends BaseSeeder {
  constructor () {
    super('encounter', Model)
    this.data = _.map(this.data[0].entry, 'resources')
  }
}

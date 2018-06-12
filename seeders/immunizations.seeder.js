import BaseSeeder from './baseSeeder.seeder'
import _ from 'lodash'
import Model from '../models/immunization'

export default class ImmunizationSeeder extends BaseSeeder {
  constructor () {
    super('immunization', Model)
    this.data = _.map(this.data[0].entry, 'resource')
  }
}

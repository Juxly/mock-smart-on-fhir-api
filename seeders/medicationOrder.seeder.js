import BaseSeeder from './baseSeeder.seeder'
import _ from 'lodash'
import Model from '../models/medicationOrder'

export default class MedicationOrderSeeder extends BaseSeeder {
  constructor () {
    super('medicationOrder', Model)
    this.data = _.map(this.data[0].entry, 'resource')
  }
}

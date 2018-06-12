import BaseSeeder from './baseSeeder.seeder'
import _ from 'lodash'
import Model from '../models/medicationStatement'

export default class MedicationStatementSeeder extends BaseSeeder {
  constructor () {
    super('medicationStatement', Model)
    this.data = _.map(this.data[0].entry, 'resource')
  }
}

import BaseSeeder from './baseSeeder.seeder'
import _ from 'lodash'
import Model from '../models/allergy'

export default class AllergySeeder extends BaseSeeder {
  constructor () {
    super('allergy', Model)
    this.data = _.map(this.data[0].entry, 'resource')
  }
}

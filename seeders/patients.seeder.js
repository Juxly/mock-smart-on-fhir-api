import BaseSeeder from './baseSeeder.seeder'
import Model from '../models/patient'

export default class PatientsSeeder extends BaseSeeder {
  constructor () {
    super('patient', Model)
  }
}

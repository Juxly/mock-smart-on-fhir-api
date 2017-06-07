import { Seeder } from 'mongoose-data-seed'
import Model from '../models/patient'
import patientMock from '../mock/patient'

const data = patientMock

export default class PatientsSeeder extends Seeder {
  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    return Model.create(data)
  }
}

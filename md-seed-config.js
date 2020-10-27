import mongooseLib from 'mongoose'
import Conditions from './seeders/conditions.seeder'
import Patients from './seeders/patients.seeder'
import Observations from './seeders/observations.seeder'
import Allergies from './seeders/allergy.seeder'
import Procedures from './seeders/procedures.seeder'
import Immunizations from './seeders/immunizations.seeder'
import MedicationOrders from './seeders/medicationOrder.seeder'
import MedicationStatements from './seeders/medicationStatement.seeder'
import Encounters from './seeders/encounter.seeder'
import DiagnosticReports from './seeders/diagnosticReport.seeder'
import Practitioner from './seeders/practitioner.seeder'
try {
  require('dotenv').config()
} catch (e) { console.log(e) }

mongooseLib.Promise = global.Promise

// Export the mongoose lib
export const mongoose = mongooseLib

// Export the mongodb url
export const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/juxly-fhir'

console.log(mongoURL)

/*
  Seeders List
  ------
  order is important
*/
export const seedersList = {
  Patients,
  Conditions,
  Observations,
  Allergies,
  Procedures,
  Immunizations,
  MedicationOrders,
  MedicationStatements,
  Encounters,
  DiagnosticReports,
  Practitioner
}

/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () => await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase()

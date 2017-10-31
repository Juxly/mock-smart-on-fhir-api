import mongoose from 'mongoose'
import Base from './base'
import utils from './utils'

const MedicationStatement = utils.extend(Base, {
  text: {
    status: String,
    div: String
  },
  extension: [{
    url: String,
    valueCodeableConcept: {
      coding: [{
        system: String,
        code: String,
        display: String
      }],
      text: String
    }
  }],
  patient: {
    reference: String,
    display: String
  },
  dateAsserted: Date,
  status: String,
  wasNotTaken: Boolean,
  effectivePeriod: {
    start: Date
  },
  medicationCodeableConcept: {
    text: String,
    coding: [{
      system: String,
      code: String,
      display: String
    }]
  },
  dosage: [{
    text: String,
    _text: {
      extension: [{
        url: String,
        valueString: String
      }]
    },
    timing: {
      repeat: {
        boundsPeriod: {
          start: Date
        }
      },
      code: {
        coding: [{
          system: String,
          code: String,
          display: String
        }],
        text: String
      }
    },
    asNeededCodeableConcept: {
      text: String
    },
    route: {
      coding: [{
        system: String,
        code: String,
        display: String
      }],
      text: String
    }
  }]
})

module.exports = mongoose.model('MedicationStatement', MedicationStatement)

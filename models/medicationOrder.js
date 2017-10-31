import mongoose from 'mongoose'
import Base from './base'
import utils from './utils'

const MedicationOrder = utils.extend(Base, {
  text: {
    status: String,
    div: String
  },
  dateWritten: Date,
  status: String,
  patient: {
    reference: String,
    display: String
  },
  prescriber: {
    reference: String,
    display: String
  },
  encounter: {
    reference: String
  },
  medicationCodeableConcept: {
    coding: [{
      system: String,
      code: String,
      display: String
    }],
    text: String
  },
  dosageInstruction: [{
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
          start: String
        }
      },
      coding: {
        coding: [{
          system: String,
          code: String,
          display: String
        }]
      }
    },
    route: {
      coding: {
        coding: [{
          system: String,
          code: String,
          display: String
        }]
      },
      text: String
    },
    doseQuantity: {
      value: String,
      unit: String,
      system: String,
      code: String
    }
  }],
  dispenseRequest: {
    validityPeriod: {
      start: Date
    }
  }
})

module.exports = mongoose.model('MedicationOrder', MedicationOrder)

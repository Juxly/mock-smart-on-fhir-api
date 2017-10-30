import mongoose from 'mongoose'
import Base from './base'
import utils from './utils'

const Immunization = utils.extend(Base, {
  text: {
    status: String,
    div: String
  },
  status: String,
  date: Date,
  vaccineCode: {
    coding: [{
      system: String,
      code: String,
      display: String
    }],
    text: String
  },
  patient: {
    reference: String,
    display: String
  },
  wasNotGiven: Boolean,
  reported: Boolean,
  performer: {
    reference: String,
    display: String
  },
  encounter: {
    reference: String
  },
  manufacturer: {
    display: String
  },
  location: {
    reference: String,
    display: String
  },
  lotNumber: String,
  expirationDate: Date,
  site: {
    coding: [{
      system: String,
      code: String,
      display: String
    }],
    text: String
  },
  route: {
    coding: [{
      system: String,
      code: String,
      display: String
    }],
    text: String
  },
  doseQuantity: {
    value: Number,
    unit: String,
    system: String,
    code: String
  }
})

module.exports = mongoose.model('Immunization', Immunization)

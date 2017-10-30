import mongoose from 'mongoose'
import Base from './base'
import utils from './utils'

const Condition = utils.extend(Base, {
  patient: {
    reference: String,
    display: String
  },
  encounter: {
    reference: String
  },
  asserter: {
    reference: String,
    display: String
  },
  dateRecorded: Date,
  code: {
    coding: [{
      system: String,
      code: String,
      display: String,
      userSelected: Boolean
    }],
    text: String
  },
  category: {
    coding: [{
      system: String,
      code: String,
      display: String
    }],
    text: String
  },
  clinicalStatus: String,
  verificationStatus: String,
  severity: {
    coding: [{
      system: String,
      code: String,
      display: String
    }],
    text: String
  },
  onsetDateTime: Date,
  abatementDateTime: Date,
  abatementBoolean: Boolean,
  notes: String
})

module.exports = mongoose.model('Condition', Condition)

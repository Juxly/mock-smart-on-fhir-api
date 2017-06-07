import mongoose from 'mongoose'
import shortid from 'shortid'

const Condition = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  id: { type: {} },
  resourceType: String,
  meta: {
    versionId: Number,
    lastUpdated: Date
  },
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
    }]
  },
  onsetDateTime: Date,
  abatementDateTime: Date,
  abatementBoolean: Boolean,
  notes: String
})

module.exports = mongoose.model('Condition', Condition)

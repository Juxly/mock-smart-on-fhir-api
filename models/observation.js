import mongoose from 'mongoose'
import shortid from 'shortid'

const Observation = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  id: { type: {} },
  resourceType: String,
  meta: {
    versionId: String,
    lastUpdated: Date
  },
  status: String,
  category: {
    coding: [{
      system: String,
      code: String,
      display: String
    }],
    text: String
  },
  code: {
    coding: [{
      system: String,
      code: String,
      display: String
    }],
    text: String
  },
  effectiveDateTime: Date,
  issued: Date,
  valueQuantity: {
    value: String,
    unit: String,
    system: String,
    code: String
  },
  subject: {
    reference: String
  },
  valueCodeableConcept: {
    text: String
  },
  referenceRange: [{
    low: {
      value: Number,
      unit: String,
      system: String,
      code: String
    },
    high: {
      value: Number,
      unit: String,
      system: String,
      code: String
    }
  }],
  interpretation: {
    coding: [{
      system: String,
      code: String,
      display: String
    }]
  },
  encounter: {
    reference: String
  }
})
module.exports = mongoose.model('Observation', Observation)

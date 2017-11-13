import mongoose from 'mongoose'
import Base from './base'
import utils from './utils'

const Observation = utils.extend(Base, {
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
  },
  related: [{
    target: {
      reference: String
    }
  }]
})
module.exports = mongoose.model('Observation', Observation)

import mongoose from 'mongoose'
import Base from './base'
import utils from './utils'

const Encounter = utils.extend(Base, {
  text: {
    status: String,
    div: String
  },
  status: String,
  class: String,
  type: [{
    text: String
  }],
  patient: {
    reference: String,
    display: String
  },
  priority: {
    coding: [{
      system: String,
      code: String,
      display: String
    }],
    text: String
  },
  participant: [{
    type: { type:
    [{
      coding: [{
        system: String,
        code: String,
        display: String
      }],
      text: String
    }]
    },
    period: {
      start: Date,
      end: Date
    },
    individual: {
      reference: String,
      display: String
    }
  }],
  period: {
    start: Date
  },
  reason: [{
    text: String
  }],
  hospitalization: {
    admitSource: {
      coding: [{
        system: String,
        code: String,
        display: String
      }],
      text: String
    }
  },
  location: [{
    location: {
      reference: String,
      display: String
    },
    status: String
  }],
  serviceProvider: {
    reference: String
  }
})
module.exports = mongoose.model('Encounter', Encounter)

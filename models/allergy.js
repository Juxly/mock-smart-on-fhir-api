import mongoose from 'mongoose'
import Base from './base'
import utils from './utils'

const Allergy = utils.extend(Base, {
  patient: {
    reference: String,
    display: String
  },
  recorder: {
    reference: String,
    display: String
  },
  reporter: {
    reference: String,
    display: String
  },
  substance: {
    text: String,
    coding: [{
      system: String,
      code: String,
      display: String
    }]
  },
  text: {
    status: String,
    div: String
  },
  status: String,
  criticality: String,
  type: String,
  category: String,
  note: {
    text: String
  },
  recordedDate: Date,
  onset: Date,
  reaction: [{
    id: String,
    manifestation: [{
      coding: [{
        system: String,
        code: String,
        display: String
      }],
      text: String
    }]
  }]
})

module.exports = mongoose.model('AllergyIntolerance', Allergy)

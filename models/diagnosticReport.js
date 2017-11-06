import mongoose from 'mongoose'
import Base from './base'
import utils from './utils'

const DiagnosticReport = utils.extend(Base, {
  text: {
    status: String,
    div: String
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
    text: String
  },
  subject: {
    reference: String,
    display: String
  },
  encounter: {
    reference: String
  },
  effectiveDateTime: Date,
  issued: Date,
  performer: {
    reference: String,
    display: String
  },
  presentedForm: [{
    contentType: String,
    url: String
  }]
})

module.exports = mongoose.model('DiagnosticReport', DiagnosticReport)

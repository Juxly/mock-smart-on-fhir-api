import mongoose from 'mongoose'
import Base from './base'
import utils from './utils'

const Procedure = utils.extend(Base, {
  subject: {
    reference: String,
    display: String
  },
  status: String,
  code: {
    coding: [{
      system: String,
      code: String,
      display: String
    }],
    text: String
  },
  performedDateTime: Date,
  text: {
    status: String,
    div: String
  },
  encounter: {
    reference: String
  }
})

module.exports = mongoose.model('Procedure', Procedure)

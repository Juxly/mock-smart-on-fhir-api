import mongoose from 'mongoose'
import shortid from 'shortid'

const Procedure = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  id: { type: {} },
  resourceType: String,
  meta: {
    versionId: Number,
    lastUpdated: Date
  },
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

import mongoose from 'mongoose'
import shortid from 'shortid'

const Document = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  id: { type: {} },
  resourceType: String,
  subject: {
    reference: String
  },
  type: {
    coding: [{
      system: String,
      code: String
    }]
  },
  author: [{
    reference: String
  }],
  indexed: String,
  status: String,
  docStatus: {
    coding: [
      {
        system: String,
        code: String
      }
    ]
  },
  description: String,
  content: [{
    attachment: {
      contentType: String,
      data: String
    }
  }],
  context: {
    encounter: {
      reference: String
    }
  }
})

module.exports = mongoose.model('Document', Document)

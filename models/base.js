import mongoose from 'mongoose'
import shortid from 'shortid'

const Base = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  id: { type: {} },
  resourceType: String,
  meta: {
    versionId: String,
    lastUpdated: Date
  }
})

module.exports = Base

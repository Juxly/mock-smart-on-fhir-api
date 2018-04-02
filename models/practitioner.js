import mongoose from 'mongoose'
import shortid from 'shortid'

const Practitioner = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  id: { type: {} },
  resourceType: String,
  text: {
    status: String,
    div: String
  },
  active: Boolean,
  name: {
    use: String,
    text: String,
    family: [{
      type: String
    }],
    given: [{
      type: String
    }],
    period: {
      start: Date
    }
  }
})
module.exports = mongoose.model('Practitioner', Practitioner)

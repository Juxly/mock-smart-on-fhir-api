import mongoose from 'mongoose'
import shortid from 'shortid'

const Patient = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  id: { type: {} },
  resourceType: String,
  identifier: [{
    use: String,
    // type: {
    //   coding: [{
    //     system: String,
    //     code: String,
    //     display: String
    //   }],
    //   text: String
    // },
    system: String,
    value: String,
    period: {
      start: Date
    }
  }],
  extension: [{
    url: String,
    extension: [{
      url: String,
      valueCoding: {
        system: String,
        code: String,
        display: String
      }
    }]
  }],
  active: Boolean,
  address: [{
    use: String,
    text: String,
    line: [String],
    city: String,
    district: String,
    state: String,
    postalCode: String,
    country: String,
    period: {
      start: Date
    }
  }],
  birthDate: Date,
  gender: String,
  maritalStatus: {
    coding: [{
      system: String,
      code: String,
      display: String
    }],
    text: String
  },
  name: [{
    use: String,
    text: String,
    family: [String],
    given: [String],
    prefix: [String],
    suffix: [String],
    period: {
      start: Date
    }
  }],
  telecom: [{
    system: String,
    value: String,
    use: String,
    period: {
      start: Date
    }
  }],
  communication: [{
    language: {
      coding: [{
        system: String,
        code: String,
        display: String
      }]
    },
    preferred: Boolean
  }],
  careProvider: [{
    reference: String,
    display: String
  }]
})
module.exports = mongoose.model('Patient', Patient)

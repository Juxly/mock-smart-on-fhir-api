import mongoose from 'mongoose'
import Base from './base'
import utils from './utils'

const QuestionnaireResponse = utils.extend(Base, {
  resourceType: String,
  identifier: [{
    use: String,
    system: String,
    value: String
  }],
  code: [{
    system: String,
    code: String,
    display: String
  }],
  status: '',
  item: [{
    answer: {
      linkId: String,
      valueBoolean: Boolean,
      valueDecimal: Number,
      valueInteger: Number,
      valueDate: Date,
      valueDateTime: Date,
      valueTime: String,
      valueUri: String,
      valueAttachment: String,
      valueString: String
    }
  }],
  text: String
})

module.exports = mongoose.model('QuestionnaireResponse', QuestionnaireResponse)

import mongoose from 'mongoose'
import _ from 'lodash'

const extend = (Schema, obj) => (
  new mongoose.Schema(
    Object.assign({}, Schema.obj, obj)
  )
)

const dateFromQuery = (date) => {
  let criteria = {}
  let split = date
  if (!_.isArray(date)) split = [date]
  _.forEach(split, (s) => {
    if (_.includes(s, 'le')) criteria.$lte = new Date(_.replace(s, 'le', '')).toISOString()
    if (_.includes(s, 'ge')) criteria.$gte = new Date(_.replace(s, 'ge', '')).toISOString()
    if (_.includes(s, 'gt')) criteria.$gt = new Date(_.replace(s, 'gt', '')).toISOString()
  })
  return criteria
}

const minDate = () => {
  return new Date(-8640000000000000)
}

module.exports = {
  extend: extend,
  dateFromQuery: dateFromQuery,
  minDate: minDate
}

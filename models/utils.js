import mongoose from 'mongoose'
import _ from 'lodash'

const extend = (Schema, obj) => (
  new mongoose.Schema(
    Object.assign({}, Schema.obj, obj)
  )
)

const dateFromQuery = (date) => {
  let criteria = {}
  let split = date.split(',')
  if (!split) split = [date]
  _.forEach(split, (s) => {
    if (_.includes(s, 'le')) criteria.$lte = new Date(_.replace(s, 'le', ''))
    if (_.includes(s, 'ge')) criteria.$gte = new Date(_.replace(s, 'ge', ''))
  })
  return criteria
}

module.exports = {
  extend: extend,
  dateFromQuery: dateFromQuery
}

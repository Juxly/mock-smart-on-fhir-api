import express from 'express'
import ConditionService from '../services/condition.service'
var router = express.Router()

router.get('/', function (req, res) {
  var conditions = ConditionService.get(req.query.patient)
  return res.send(conditions)
})

module.exports = router

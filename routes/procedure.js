import express from 'express'
import ProcedureService from '../services/procedure.service'
var router = express.Router()

router.get('/', function (req, res) {
  if (!req.query.patient && !req.query._id && !req.query.subject) {
    return res.status(400).send('Invalid parameters')
  }
  return ProcedureService.get(req.query).then(result => {
    return res.send(result)
  })
})

module.exports = router

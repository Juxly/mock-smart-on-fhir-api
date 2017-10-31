import express from 'express'
import MedicationOrderService from '../services/medicationOrder.service'
var router = express.Router()

router.get('/', function (req, res) {
  if (!req.query.patient) return res.status(400).send('Patient is Required')
  return MedicationOrderService.get(req.query).then(result => {
    return res.send(result)
  })
})

module.exports = router

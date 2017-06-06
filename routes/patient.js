import express from 'express'
import PatientService from '../services/patient.service'
var router = express.Router()

router.get('/:patientId', function (req, res) {
  var pt = PatientService.get(req.query.patientId)
  return res.send(pt)
})

module.exports = router

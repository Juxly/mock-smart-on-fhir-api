import express from 'express'
import PatientService from '../services/patient.service'
var router = express.Router()

router.get('/:patientId', function (req, res) {
  PatientService.get(req.params.patientId).then(function (result) {
    return res.send(result)
  })
})

module.exports = router

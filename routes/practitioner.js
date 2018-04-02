import express from 'express'
import PractitionerService from '../services/practitioner.service'
var router = express.Router()

router.get('/:id', function (req, res) {
  PractitionerService.get(req.params.id).then(function (result) {
    return res.send(result)
  })
})

module.exports = router

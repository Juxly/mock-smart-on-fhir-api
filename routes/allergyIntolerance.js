import express from 'express'
import AllergyService from '../services/allergy.service'
var router = express.Router()

router.get('/', function (req, res) {
  return AllergyService.get(req.query.patient).then(result => {
    return res.send(result)
  })
})

module.exports = router

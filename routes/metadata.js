import express from 'express'
import metadata from '../mock/metadata'
var router = express.Router()

router.get('/', function (req, res, next) {
  res.type('application/json+fhir')
  res.send(metadata)
})

module.exports = router

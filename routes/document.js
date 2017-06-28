import express from 'express'
import DocumentService from '../services/document.service'
var router = express.Router()

router.post('/', function (req, res) {
  return DocumentService.save(req.body).then(result => {
    return res.send(result)
  })
})

module.exports = router

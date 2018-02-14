import express from 'express'
import ConditionService from '../services/condition.service'
var router = express.Router()

router.get('/', function (req, res) {
  return ConditionService.get(req.query.patient, req.query.clinicalstatus).then(result => {
    return res.send(result)
  })
})

router.post('/', function (req, res) {
  return _save(req, res)
})

router.put('/:id', function (req, res) {
  return ConditionService.getById(req.params.id).then(existing => {
    if (!existing || existing.entry[0].resource.meta.versionId !== req.body.meta.versionId) {
      return res.status(409).send('Current state of resource is conflict')
    }
    return _save(req, res)
  })
})

function _save (req, res) {
  return ConditionService.save(req.body).then(result => {
    _setHeaders(req, res, result)
    return res.send(result)
  })
}

function _setHeaders (req, res, returnVal) {
  res.set('ETag', 'W/' + returnVal.meta.versionId)
  res.set('Location', req.protocol + '://' + req.get('host') + '/api/Condition/' + returnVal.id)
}

module.exports = router

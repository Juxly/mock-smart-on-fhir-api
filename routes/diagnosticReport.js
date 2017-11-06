import express from 'express'
import DiagnosticReportService from '../services/diagnosticReport.service'
const router = express.Router()

router.get('/', (req, res) => {
  if (!req.query.patient && !req.query.subject) return res.status(400).send('Invalid parameters')
  return DiagnosticReportService.get(req.query).then(result => {
    res.send(result)
  })
})

module.exports = router

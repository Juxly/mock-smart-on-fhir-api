import express from 'express'
import QuestionnaireResponse from '../models/questionnaireResponse'
const router = express.Router()

router.get('/', (req, res) => {
  if (!req.query.encounter) return res.status(401).send('No encounter provided')
  // PHQ is 0-27, GAD is 0-21
  const totalValue = Math.floor((Math.random() * 27) + 1)
  const qrPhq = new QuestionnaireResponse()
  qrPhq.resourceType = 'QuestionnaireResponse'
  qrPhq.identifier = [{
    use: 'official',
    system: 'phq-9'
  }]
  qrPhq.code = [{
    system: 'http://loinc.org',
    code: '44249-1',
    display: 'PHQ-9 quick depression assessment panel:-:Pt:^Patient:-:Report.PHQ-9'
  }]
  qrPhq.item = [{
    answer: {
      linkId: 'TotalScore',
      valueBoolean: false,
      valueInteger: totalValue
    }
  }]
  qrPhq.text = 'Patient Health Questionnaire 9 item (PHQ-9) total score'

  const totalGad = Math.floor((Math.random() * 21) + 1)
  const qrGad = new QuestionnaireResponse()
  qrGad.resourceType = 'QuestionnaireResponse'
  qrGad.identifier = [{
    use: 'official',
    system: 'gad-7'
  }]
  qrGad.code = [{
    system: 'http://loinc.org',
    code: '69737-5',
    display: 'Generalized anxiety disorder 7 item (GAD-7)'
  }]
  qrGad.item = [{
    answer: {
      linkId: 'TotalScore',
      valueBoolean: false,
      valueInteger: totalGad
    }
  }]
  qrGad.text = 'Generalized anxiety disorder 7 item(GAD-7)'
  console.log('to return')
  return res.send([qrPhq, qrGad])
})

module.exports = router

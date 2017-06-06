import _ from 'lodash'
import mockObservations from '../mock/observation.json'

class ObervationService {
  get (req) {
    let entries = []
    if (req.query.code) {
      entries = this._getByCode(req.query.code)
    } else if (req.query.category) {
      entries = this._getByCategory(req.query.category)
    } else {
      entries = mockObservations.entry
    }
    return {
      resourceType: 'Bundle',
      id: '651f6ccc-2ceb-4098-9296-a4731fb2065a',
      type: 'searchset',
      link: [
        {
          relation: 'self',
          url: ''
        }
      ],
      entry: entries
    }
  }

  _getByCode (code) {
    let obs = []
    _.forEach(code.split(','), c => {
      const index = c.indexOf('|')
      if (index < 0) return
      const searchSystem = c.substring(0, index)
      const searchCode = c.substring(index + 1)
      const o = _.find(mockObservations.entry, mock => {
        let coding = _.find(mock.resource.code.coding, ['system', searchSystem])
        if (!coding) return
        if (coding.code === searchCode) return mock
      })
      if (o) obs.push(o)
    })
    return obs
  }

  _getByCategory (category) {
    const catArray = category.replace('http://hl7.org/fhir/observation-category', '').split('|')
    let obs = []
    _.forEach(catArray, cat => {
      if (!cat) return
      obs = obs.concat(_.filter(mockObservations.entry, ['resource.category.coding[0].code', cat]))
    })
    return obs
  }
}

export default new ObervationService()

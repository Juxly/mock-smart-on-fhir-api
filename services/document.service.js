import shortid from 'shortid'
import Document from '../models/document'

class DocumentService {
  save (d) {
    console.log('in document service')
    console.log(d)
    if (!d.id) {
      d.id = shortid.generate().toLowerCase()
    }
    return Document.findOneAndUpdate({
      id: d.id
    }, d, {upsert: true, 'new': true}).then(result => {
      console.log(result)
      return result
    })
  }
}

export default new DocumentService()

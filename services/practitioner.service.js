import Practitioner from '../models/practitioner'
import BaseService from './base.service'

class PractitionerService extends BaseService {
  get (id) {
    return super.request(Practitioner, {id: id}, 'findOne')
  }
}

export default new PractitionerService()

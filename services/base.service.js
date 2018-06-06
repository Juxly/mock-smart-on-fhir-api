import Bundle from '../models/bundle'

export default class BaseService {
  request (model, criteria, func = 'find') {
    return model[func](criteria).then(result => {
      return new Bundle(result)
    })
  }
}

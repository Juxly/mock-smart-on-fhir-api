import _ from 'lodash'
export default class Bundle {
  constructor (data) {
    return {
      entry: _.map(data, (re) => { return { resource: re } })
    }
  }
}

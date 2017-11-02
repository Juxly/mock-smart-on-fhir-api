import _ from 'lodash'
import encrypter from 'object-encrypter'
const engine = encrypter(process.env.SECRET, {outputEncoding: 'hex'})

export default class Bundle {
  constructor (data, request) {
    const total = data.total
    const d = data.data ? data.data : data
    return {
      id: this.guid(),
      resourceType: 'Bundle',
      type: 'searchset',
      link: this.createLink(d, request, total),
      total: total,
      entry: _.map(d, (re) => { return { resource: re } })
    }
  }

  createLink (data, request, total) {
    const hex = !request ? '' : engine.encrypt(request)
    const direction = request['-pageDirection'] || 'NEXT'
    let prev = {}
    let next = {}
    const reqTotal = request._page * request._count
    const baseUrl = [request.protocol, '://', request.host, ':', request.port, request.originalUrl, '?patient=', request.patientId].join('')
    const s = {
      link: 'self',
      url: [baseUrl, '&-pageDirection=', direction, '&-pageContext=', hex].join('')
    }
    if (total > reqTotal) {
      next = {
        link: 'next',
        url: [baseUrl, '&-pageDirection=', 'NEXT', '&-pageContext=', hex].join('')
      }
    } else if (request._page !== 0) {
      prev = {
        link: 'previous',
        url: [baseUrl, '&-pageDirection=', 'PREVIOUS', '&-pageContext=', hex].join('')
      }
    }
    return [s, prev, next]
  }

  guid () {
    function s4 () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4()
  }
}

import jwt from 'jsonwebtoken'
import randtoken from 'rand-token'
import config from '../config'

class AuthService {
  constructor () {
    this.refreshTokens = {}
  }
  authorize (req) {
    const incomingJwt = req.query.launch && req.query.launch.replace(/=/g, '')
    const code = {
      context: incomingJwt ? jwt.decode(incomingJwt) : {},
      client_id: req.query.client_id,
      scope: req.query.scope
    }
    const state = req.query.state
    const signedCode = jwt.sign(code, config.key, { expiresIn: '15m' })
    return {code: signedCode, state: state}
  }

  createToken (code, clientId) {
    let context = {...code.context,
      encounter: '123456789',
      patient: '5566778899',
      // patient: '4754012',
      user: '987654321'
    }
    let token = {...context,
      token_type: 'bearer',
      expires_in: 3600,
      scope: code.scope,
      client_id: clientId
    }
    const tokenExpire = String(config.tokenExpire)
    token.access_token = jwt.sign({...token}, config.key, { algorithm: 'RS256', expiresIn: `${tokenExpire}m` })
    token.refresh_token = randtoken.uid(256)
    token.id_token = jwt.sign(this._createOpenID(), config.key, {algorithm: 'RS256', keyid: '1'})
    this.refreshTokens[token.refresh_token] = token
    // TODO: maybe don't hardcode the context
    token.encounter = context.encounter
    token.patient = context.patient
    token.user = context.user
    return token
  }

  checkToken (req, res, next) {
    let token = req.body.token || req.query.token || req.headers['authorization']
    if (token.includes('Bearer')) token = token.replace('Bearer ', '')
    if (token) {
      try {
        jwt.verify(token, config.publicKey, {algorithm: 'RS256'})
      } catch (e) {
        return res.status(401).send('token is invalid')
      }
      next()
    } else {
      return res.status(403).send('token was not provided.')
    }
  }

  getRefreshToken (token) {
    if (token && this.refreshTokens[token]) return this.refreshTokens[token]
    else throw new Error('Unable to find refresh token')
  }

  _createOpenID () {
    return {
      sub: 'username',
      aud: 'clientid',
      iss: 'http://localhost:3000/api/openid/',
      profile: 'http://localhot:3000/api/Practitioner/1'
    }
  }
}

export default new AuthService()

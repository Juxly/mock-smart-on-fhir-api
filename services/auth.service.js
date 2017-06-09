import jwt from 'jsonwebtoken'
// import randtoken from 'rand-token'
import config from '../config'

class AuthService {
  authorize (req) {
    const incomingJwt = req.query.launch && req.query.launch.replace(/=/g, '')
    const code = {
      context: incomingJwt ? jwt.decode(incomingJwt) : {},
      client_id: req.query.client_id,
      scope: req.query.scope
    }
    const state = req.query.state
    const signedCode = jwt.sign(code, config.secret, { expiresIn: '10m' })
    return {code: signedCode, state: state}
  }

  createToken (code, clientId) {
    let context = {...code.context,
      encounter: '123456789',
      patient: '5566778899',
      user: '987654321'
    }
    let token = {...context,
      token_type: 'bearer',
      expires_in: 3600,
      scope: code.scope,
      client_id: clientId
    }
    token.access_token = jwt.sign({...token}, config.secret, { expiresIn: '15m' })
    token.refresh_token = jwt.sign({...token}, config.secret, { expiresIn: '1h' })
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
        jwt.verify(token, config.secret)
      } catch (e) {
        return res.status(401).send('token is invalid')
      }
      next()
    } else {
      return res.status(403).send('token was not provided.')
    }
  }
}

export default new AuthService()

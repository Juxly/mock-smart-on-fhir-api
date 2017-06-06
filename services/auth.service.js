import jwt from 'jsonwebtoken'
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
    let token = {...code.context,
      token_type: 'bearer',
      expires_in: 3600,
      scope: code.scope,
      client_id: clientId
    }
    token.access_token = jwt.sign({...token}, config.secret, { expiresIn: '1h' })
    // TODO: maybe don't hardcode the context
    token.encounter = '123456789'
    token.patient = '5566778899'
    token.user = '987654321'
    return token
  }
}

export default new AuthService()

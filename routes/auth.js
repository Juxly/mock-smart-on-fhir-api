import express from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import AuthService from '../services/auth.service'
var router = express.Router()

router.get('/authorize', (req, res) => {
  if (!req.query.redirect_uri) return res.status(400).send('redirect_uri required')
  if (!req.query.scope) return res.status(400).send('scopes are required')
  const authorization = AuthService.authorize(req)
  res.redirect(req.query.redirect_uri + ('?code=' + authorization.code + '&state=' + authorization.state))
})

router.post('/token', (req, res) => {
  if (!req.body || !req.body.grant_type) return res.status(400).send('grant_type is required')
  let authCode = ''
  let code = ''
  if (req.body.grant_type === 'authorization_code') {
    authCode = req.body.code
    try {
      code = jwt.verify(authCode, config.key)
    } catch (e) {
      return res.status(401).send('token is invalid')
    }
  } else code = AuthService.getRefreshToken(req.body.refresh_token)

  if (!code) return res.status(401).send('token is invalid')
  const token = AuthService.createToken(code, req.body.client_id)
  res.json(token)
})

module.exports = router

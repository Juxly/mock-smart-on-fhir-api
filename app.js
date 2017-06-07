'use strict'
import express from 'express'
import path from 'path'
// import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'

// routes
import routes from './routes/index'
import auth from './routes/auth'
import metadata from './routes/metadata'
import patient from './routes/patient'
import condition from './routes/condition'
import observation from './routes/observation'

import AuthService from './services/auth.service'

let app = express()

app.use(cors())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)
app.use('/api/oauth', auth)
app.use('/api/metadata', metadata)
app.use('/api/patient', AuthService.checkToken, patient)
app.use('/api/condition', AuthService.checkToken, condition)
app.use('/api/observation', AuthService.checkToken, observation)

app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app

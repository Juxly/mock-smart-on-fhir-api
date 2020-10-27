import express from 'express'
import mongoose from 'mongoose'
const shell = require('shelljs')
const router = express.Router()

router.post('/reset', async (req, res) => {
  await mongoose.connection.db.dropDatabase()
  const code = await shell.exec('md-seed run --dropdb').code
  if (code !== 0) return res.status(500).send('Unable to seed database')
  return res.sendStatus(200)
})

module.exports = router

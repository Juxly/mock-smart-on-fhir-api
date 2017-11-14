/*
  Hash an object for launch context
  http://localhost:8000/juxly/launch.html?iss=http%3A%2F%2Flocalhost:3000%2Fapi&launch=1c2aaba5-0ed1-47d2-a536-f433bd8255e1
 */
(function () {
  try {
    require('dotenv').config()
  } catch (e) { console.log(e) }
  const encrypter = require('object-encrypter')
  const engine = encrypter(process.env.SECRET, {outputEncoding: 'hex'})

  const objectToEncrypt = {
    encounter: '123456789',
    patient: '5566778899',
    user: '4464007'
  }

  const hash = engine.encrypt(objectToEncrypt)
  console.log(hash)
})()

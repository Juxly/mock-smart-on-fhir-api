// Imports the Google Cloud client library
const Storage = require('@google-cloud/storage')
const Mongonaut = require('mongonaut')
const _ = require('lodash')
const del = require('del')
const fs = require('fs-extra-promise')
const glob = require('glob')
const projectId = 'timeline-devtest'
const storage = new Storage({
  projectId: projectId
})
const bucketName = 'juxly-timeline-test-data'

function downloadFile (fileName) {
  const options = {
    destination: `data/${fileName}`
  }
  return storage
    .bucket(bucketName)
    .file(fileName)
    .download(options)
    .then(() => {
      return fileName
    })
    .catch(err => {
      console.error('ERROR:', err)
    })
}

function listFiles () {
  return storage
    .bucket(bucketName)
    .getFiles()
    .then(results => {
      return results[0]
    })
    .catch(err => {
      console.error('ERROR:', err)
    })
}

function _getMongoInstance (collection) {
  console.log(collection)
  return new Mongonaut({
    'db': 'juxly-fhir',
    'collection': collection
  })
}

function mongoImport (file) {
  const index = file.lastIndexOf('/') + 1
  const collection = _.replace(_.toLower(file.substring(index)), '.json', '') + 's'
  const mongoInstance = _getMongoInstance(collection)
  return mongoInstance.import(file).then((success) => {
    return true
  }).catch(err => {
    console.log(err)
  })
}

del.sync(['data/*'])
const downloadPromise = listFiles().then(files => {
  let promises = []
  _.forEach(files, file => {
    if (!_.includes(file.name, '.json')) {
      fs.mkdir(`data/${file.name}`)
      return
    }
    promises.push(downloadFile(file.name))
  })
  return Promise.all(promises).then(() => {
    return console.log('great success')
  })
})
downloadPromise.then(() => {
  console.log('in downloadPromise')
  let importPromises = []
  const files = glob.sync('./data/**/*.json')
  _.forEach(files, file => {
    importPromises.push(mongoImport(file))
  })
  return Promise.all(importPromises).then(() => {
    return process.exit()
  })
})

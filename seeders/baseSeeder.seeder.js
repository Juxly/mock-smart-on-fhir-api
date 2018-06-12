import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import { Seeder } from 'mongoose-data-seed'

const rootDir = './mock'

export default class BaseSeeder extends Seeder {
  constructor (name, model) {
    super()
    this.name = name
    this.re = new RegExp(this.name + '\\.json$')
    this.model = model
    this.data = []

    _.forEach(fs.readdirSync(rootDir).filter(f => fs.statSync(path.join(rootDir, f)).isDirectory()), folder => {
      // console.log(folder)
      _.forEach(fs.readdirSync(path.join(rootDir, folder)), file => {
        // console.log(file)
        if (file.match(this.re) !== null) {
          var data = require(['..', rootDir, folder, file].join('/'))
          // console.log(patient)
          this.data = this.data.concat(data)
        }
      })
    })
  }
  async shouldRun () {
    return this.model.count().exec().then(count => count === 0)
  }

  async run () {
    return this.model.create(this.data)
  }
}

const {readFile} = require('fs/promises')
const {render} = require('ejs')
const files = require('./utils/files')
const {exec} = require('child_process')
const {outputFile, pathExists} = require('fs-extra')
const CliSpinner = require('./utils/spinner')
const colors = require('colors')
const {getInputFromTerminal} = require('./commands/getInput')
const {createAppFactory} = require('./factory/factory')
const {join} = require('path')
const packageJson = require('../package.json')
const axios = require('axios')

// instance the Spinner
const cliSpinner = new CliSpinner()

// get absolut path of templates
const dir = join(__dirname, '../templates')

const dependencies = {
  readFile,
  render,
  files,
  exec,
  outputFile,
  cliSpinner,
  packageJson,
  colors,
  getInputFromTerminal,
  dir,
  pathExists,
  axios,
}
module.exports = createAppFactory(dependencies)

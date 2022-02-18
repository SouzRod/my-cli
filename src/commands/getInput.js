const inquirer = require('inquirer')
const logo = require('../utils/logo')
module.exports.getInputFromTerminal = async () => {
  console.log(logo())
  const types = ["docker", "serverless"]
  const databases = ["mongo", "n/d"]
  const type = await inquirer.prompt({
    type: 'list',
    message: "Select project type",
    name: "type",
    choices: types,
  })
  console.log('Example: alexa, remote-config, jwt'.green)
  const name = await inquirer.prompt({
    type: 'input',
    message: "Write the name of your project:",
    name: "name",
  })
  const resource = await inquirer.prompt({
    type: 'checkbox',
    message: "Select the DB:",
    name: "resource",
    choices: databases,
  })
  const removeFieldBlankAndCheckName = name => {
    const regex = /^[a-z0-9-]+[a-z0-9]+$/gm
    const match = name.match(regex)
    if (!name || name === ' ' || !match) {
      throw new Error('The project name is wrong, please check the examples.'.red)
    }
    return name.trim()
  }
  const checkResource = () => {
    if (resource.resource.length === 3 || resource.resource.length === 0) {
      throw new Error('Choose the database options correctly!'.red)
    }
  }
  checkResource()
  return {
    type: type.type,
    name: removeFieldBlankAndCheckName(name.name),
    resource: resource.resource,
  }
}

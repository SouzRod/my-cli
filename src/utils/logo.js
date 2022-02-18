const figlet = require('figlet')
module.exports = () => {
  return figlet.textSync('MyCLI').red
}

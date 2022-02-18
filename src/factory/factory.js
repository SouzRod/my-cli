const {createApp} = require('../services/creator.js')
module.exports.createAppFactory = async dependencies => {
  return createApp(dependencies)
}

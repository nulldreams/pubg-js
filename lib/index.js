const controllers = {
  players: require('./controllers/players'),
  player: require('./controllers/player'),
  match: require('./controllers/match'),
  telemetry: require('./controllers/telemetry'),
  utils: require('./controllers/utils')
}
const API = require('./api')
const self = this

exports.setToken = async function (key) {
  self.token = key
  let result = await API.status(self.token)
  
  return new Promise((resolve, reject) => {
    return resolve(result)
  })
}

exports.decodeToken = controllers.utils.decodeToken

exports.players = controllers.players

exports.player = controllers.player

exports.match = controllers.match

exports.telemetry = controllers.telemetry

exports.self = this
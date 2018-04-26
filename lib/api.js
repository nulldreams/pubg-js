const request = require('./request')

exports.status = async function (token) {
  let result = await API(`https://api.playbattlegrounds.com/status`, token)
  return new Promise((resolve, reject) => {
    return resolve(result)
  })
}

exports.player = {
  info: async function (region, nick, token) {
    let result = await API(`https://api.playbattlegrounds.com/shards/${region}/players?filter[playerNames]=${nick}`, token)
    return new Promise((resolve, reject) => {
      return resolve(result)
    })
  },
  infoById: async function (region, id, token) {
    let result = await API(`https://api.playbattlegrounds.com/shards/${region}/players?filter[playerIds]=${id}`, token)
    return new Promise((resolve, reject) => {
      return resolve(result)
    })
  }
}

exports.players = {
  info: async function (region, nick, token) {
    let result = await API(`https://api.playbattlegrounds.com/shards/${region}/players?filter[playerNames]=${nick}`, token)
    return new Promise((resolve, reject) => {
      return resolve(result)
    })
  },
  infoById: async function (region, id, token) {
    let result = await API(`https://api.playbattlegrounds.com/shards/${region}/players?filter[playerIds]=${id}`, token)
    return new Promise((resolve, reject) => {
      return resolve(result)
    })
  }
}

exports.match = async function (region, id, token) {
  let result = await API(`https://api.playbattlegrounds.com/shards/${region}/matches/${id}`, token)
  return new Promise((resolve, reject) => {
    return resolve(result)
  })
}

async function API (url, token) {
  let { response, body } = await request.get(url, token)

  if (response.statusCode !== 200) {
    return console.log('erro', response.statusMessage)
  }

  return new Promise((resolve, reject) => {
    return resolve(body)
  })
}

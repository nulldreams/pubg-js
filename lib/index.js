const API = require('./api')
const atob = require('atob')
const _ = require('lodash')
const self = this

exports.setToken = async function (key) {
  self.token = key
  let result = await API.status(this.token)

  return new Promise((resolve, reject) => {
    return resolve(result)
  })
}

exports.decodeToken = async function () {
  let dec = JSON.parse(atob(self.token.split('.')[1]))

  return {
    publisher: dec.pub,
    title: dec.title,
    app: dec.app,
    scope: dec.scope,
    requestsLimit: dec.limit
  }
}

exports.player = {
  info: async function (region, nick) {
    let result = await API.player.info(region, nick, self.token)

    return new Promise((resolve, reject) => {
      return resolve(result)
    })
  },
  infoById: async function (region, id) {
    let result = await API.player.infoById(region, id, self.token)

    return new Promise((resolve, reject) => {
      return resolve(result)
    })
  }
}

exports.players = {
  info: async function (region, nick) {
    let result = await API.players.info(region, nick, self.token)

    return new Promise((resolve, reject) => {
      return resolve(result)
    })
  },
  infoById: async function (region, id) {
    let result = await API.players.infoById(region, id, self.token)

    return new Promise((resolve, reject) => {
      return resolve(result)
    })
  }
}

exports.match = {
  data: async function (region, id) {
    let result = await API.match(region, id, self.token)

    return new Promise((resolve, reject) => {
      return resolve(result)
    })
  },
  players: async function (region, id) {
    let result = JSON.parse(await API.match(region, id, self.token))

    let arrPlayers = _.filter(result.included, { type: 'participant' })

    return new Promise((resolve, reject) => {
      return resolve(arrPlayers)
    })
  }
}

exports.telemetry = {
  url: async function (region, id) {
    let result = JSON.parse(await API.match(region, id, self.token))

    let url = _.filter(result.included, { type: 'asset' })[0].attributes.URL

    return new Promise((resolve, reject) => {
      return resolve(url)
    })
  }
}

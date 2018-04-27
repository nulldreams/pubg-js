const API = require('../api')
const _ = require('lodash')
const utils = require('./utils')
var self = require('../index')

exports.data = async function (region, id) {
  let result = await API.match(region, id, self.token)

  return new Promise((resolve, reject) => {
    return resolve(result)
  })
}

exports.players = {
  length: async function (region, id) {
    let result = JSON.parse(await API.match(region, id, self.token))

    let arrPlayers = _.filter(result.included, {
      type: 'participant'
    }).length

    return new Promise((resolve, reject) => {
      return resolve(arrPlayers)
    })
  },
  data: async function (region, id) {
    let result = JSON.parse(await API.match(region, id, self.token))

    let arrPlayers = _.filter(result.included, {
      type: 'participant'
    })

    return new Promise((resolve, reject) => {
      return resolve(arrPlayers)
    })
  },
  mostKills: async function (region, id) {
    let result = JSON.parse(await API.match(region, id, self.token))

    let player = _.maxBy(result.included, function (o) {
      if (o.type === 'participant') return o.attributes.stats.kills
    })

    return new Promise((resolve, reject) => {
      return resolve(player)
    })
  },
  find: utils.find
}

exports.winner = {
  player: async function (region, id) {
    let search = {
      node: 'included',
      query: function (v) {
        if (v.type === 'participant') { return v.attributes.stats.winPlace === 1 }
      }
    }

    let winner = { data: {}, names: [] }
    winner.data = await utils.find(region, id, search)

    winner.data.forEach(element => {
      winner.names.push(element.attributes.stats.name)
    })

    return new Promise((resolve, reject) => {
      return resolve(winner)
    })
  },
  team: async function (region, id) {
    let search = {
      node: 'included',
      query: function (v) {
        if (v.type === 'roster') { return v.attributes.stats.rank === 1 }
      }
    }

    let winner = await utils.find(region, id, search)

    return new Promise((resolve, reject) => {
      return resolve(winner)
    })
  }
}

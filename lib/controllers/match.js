const API = require('../api')
const atob = require('atob')
const _ = require('lodash')
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
  find: async function (region, id, search) {
    let result = JSON.parse(await API.match(region, id, self.token))
    let node = result[search.node]

    let response = _.filter(node, search.query)
    console.log(response)
    // return new Promise((resolve, reject) => {
    //   return resolve(response)
    // })
  }
}
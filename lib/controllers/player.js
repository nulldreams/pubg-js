const API = require('../api')
const atob = require('atob')
const _ = require('lodash')
var self = require('../index')

exports.info = async function (region, nick) {
  let result = await API.player.info(region, nick, self.token)

  return new Promise((resolve, reject) => {
    return resolve(result)
  })
}

exports.infoById = async function (region, id) {
  let result = await API.player.infoById(region, id, self.token)

  return new Promise((resolve, reject) => {
    return resolve(result)
  })
}
const API = require('../api')
const atob = require('atob')
const _ = require('lodash')
var self = require('../index')

const match = require('./match')

exports.url = async function (region, id) {
  let result = JSON.parse(await match.data(region, id, self.token))

  let url = _.filter(result.included, { type: 'asset' })[0].attributes.URL

  return new Promise((resolve, reject) => {
    return resolve(url)
  })
}
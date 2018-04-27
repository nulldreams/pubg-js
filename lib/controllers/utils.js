const API = require('../api')
const atob = require('atob')
const _ = require('lodash')
var self = require('../index')

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

exports.find = async function (region, id, search) {
  let result = JSON.parse(await API.match(region, id, self.token))
  let node = result[search.node]
  let response

  if (typeof search.query === 'function') response = await findThan(node, search)
  else response = _.filter(node, search.query)

  return new Promise((resolve, reject) => {
    return resolve(response)
  })
}

async function findThan (array, search) {
  return _.filter(array, search.query)
}

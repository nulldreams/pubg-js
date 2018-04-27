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
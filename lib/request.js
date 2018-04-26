const request = require('request')

async function get (url, token) {
  return new Promise((resolve, reject) => {
    request({ url, method: 'GET', headers: { authorization: `Bearer ${token}`, accept: 'application/vnd.api+json' } }, (error, response, body) => {
      if (error) return reject(error)

      return resolve({ body, response })
    })
  })
}

module.exports = {
  get
}

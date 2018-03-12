'use strict'

const config = require('../config')
const store = require('../store')

const create = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/contractors',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  create
}

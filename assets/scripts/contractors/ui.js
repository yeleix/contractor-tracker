'use strict'
const store = require('../store')

const onCreateSuccess = function (data) {
  store.contractor = data.contractor
  console.log(store.contractor)
}

module.exports = {
  onCreateSuccess
}

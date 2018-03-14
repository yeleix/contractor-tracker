'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const contractorsEvents = require('./contractors/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  contractorsEvents.addHandlers()
  $('#create').on('submit', contractorsEvents.onCreate)
  $('#create').on('submit', function () {
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// $(() => {
//
// })

'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const contractorsEvents = require('./contractors/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  contractorsEvents.addHandlers()
  $('#sign-out').hide()
  $('#side-forms').hide()
  $('#result-container').hide()
  $('#change-password-button').hide()
  $('.sign-up').show()
  $('.sign-in').show()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// $(() => {
//
// })

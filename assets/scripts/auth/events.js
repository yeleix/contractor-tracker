'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// ON SIGN-UP
const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// ON SIGN-IN
const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  // console.log('click')
  api.signIn(data)

    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// ON CHANGE-PASSWORD
const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('click')
  const data = getFormFields(this)
  // console.log('data')
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// ON SIGN-OUT
const onSignOut = function () {
  event.preventDefault()
  // console.log('this works')
  const data = getFormFields(this)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').show()
  $('#sign-in').show()
  // $('.change-password').hide()
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}

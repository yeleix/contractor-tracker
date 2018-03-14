'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully!')
  $('#message').css('background-color', 'green')
  $('.input-field').val('')
  console.log(data)
  // $('.modal-backdrop').css('display', 'none')
  // $('#signUp').hide()
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on signing up!')
  $('#message').css('background-color', 'red')
  $('.input-field').val('')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully!')
  $('#message').css('color', 'white')
  $('#message').css('background-color', 'green')
  $('.input-field').val('')
  // $('#game-history').show()
  // $('#start-over').show()
  $('#sign-out-button').show()
  // // $('.Square').toggle(1000)
  // $('#change-password-button').show()
  // $('#signUp').hide()
  // $('#signIn').hide()
  // $('.modal-backdrop').css('display', 'none') // modal was created. need to hide
  // $('#message').hide(1000)
  // $('#sign-in-button').toggle()
  // $('#sign-up-button').toggle()
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on signing in!')
  $('#message').css('background-color', 'red')
  $('.input-field').val('')
}

const changePasswordSuccess = function (data) {
  $('#message').show(2000)
  $('#message').text('Change password Successfully!')
  $('#message').css('background-color', 'green')
  $('.input-field').val('')
  // $('#changePassword').toggle()
  $('.modal-backdrop').css('display', 'none')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error on changing password!')
  $('#message').css('background-color', 'red')
  $('.input-field').val('')
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out Successfully!')
  $('#message').css('background-color', 'green')
  $('.input-field').val('')
  $('#message').hide(1000)
  // // $('#game-history').hide()
  // // $('#start-over').hide()
  // $('#sign-out-button').show()
  // // $('.Square').toggle()
  // // $('#game-message').hide()
  // $('#change-password-button').hide()
  // $('#sign-in-button').toggle()
  // $('#sign-up-button').toggle()
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error on signing out!')
  $('#message').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signInFailure,
  signOutSuccess,
  signOutFailure
}

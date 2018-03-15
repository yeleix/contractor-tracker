'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully!')
  $('#message').css('background-color', 'green')
  $('.input-field').val('')

  // console.log(data)
  // $('.modal-backdrop').css('display', 'none')
  // $('#signUp').hide()
}

const signUpFailure = function () {
  // console.error(error)
  $('#message').text('Error on signing up!')
  $('#message').css('background-color', 'red')

  $('.input-field').val('')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully!')
  $('#message').css('color', 'white')
  $('#message').css('background-color', 'green')
  $('#message').fadeIn(1000).delay(1000).fadeOut(300)
  $('.sign-up').hide()
  $('.input-field').val('')
  $('#side-forms').show()
  $('#result-container').show()
  $('#change-password-button').show()
  // $('#game-history').show()
  // $('#start-over').show()
  $('.sign-in').hide()
  $('#sign-out').show()
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

const signInFailure = function () {
  // console.error(error)
  $('#message').text('Error on signing in!')
  $('#message').css('background-color', 'red')
  $('.input-field').val('')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Change password Successfully!')
  $('#message').css('background-color', 'green')
  $('#message').fadeIn(2000).delay(2000).fadeOut(3000)
  $('.input-field').val('')
  // $('#changePassword').toggle()
  $('.modal-backdrop').css('display', 'none')
}

const changePasswordFailure = function () {
  // console.error(error)
  $('#message').text('Error on changing password!')
  $('#message').css('background-color', 'red')
  $('.input-field').val('')
}

const signOutSuccess = function (data) {
  $('#message').text('successfully signed out')
  $('#message').css('background-color', 'green')
  $('#message').hide(2000)
  $('#change-password-button').hide()
  $('.sign-up').show()
  $('.sign-in').show()
  $('#sign-out').hide()
  $('#side-forms').hide()
  $('#result-container').hide()
}

const signOutFailure = function () {
  // console.error(error)
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

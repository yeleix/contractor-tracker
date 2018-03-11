'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('input').val('')
  $('#signUpMessage').text('Signed up successfully')
  $('#signUpMessage').css('color', 'green')
}

const signUpFailure = function () {
  $('input').val('')
  $('#signUpMessage').text('Error on signing up')
  $('#signUpMessage').css('color', 'red')
}

const signInSuccess = function (data) {
  $('input').val('')
  $('#signInMessage').text('Signed in successfully')
  $('#signInMessage').css('color', 'green')
  store.user = data.user
}

const signInFailure = function () {
  $('#signInMessage').text('Error on signing in')
  $('#signInMessage').css('color', 'red')
}

const changePasswordSuccess = function () {
  $('input').val('')
  $('#changePwMessage').text('Changed password successfully')
  $('#changePwMessage').css('color', 'green')
}

const changePasswordFailure = function () {
  $('input').val('')
  $('#changePwMessage').text('Error on changing password')
  $('#changePwMessage').css('color', 'red')
}

const signOutSuccess = function () {
  $('input').val('')
  $('#signOutMessage').text('Sign out successfully')
  $('#signOutMessage').css('color', 'red')
}

const signOutFailure = function () {
  $('input').val('')
  $('#signOutMessage').text('Error on sign out.')
  $('#signOutMessage').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

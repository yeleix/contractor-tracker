'use strict'
const showlistsTemplate = require('../templates/list.handlebars')
const showlistTemplate = require('../templates/partial.handlebars')
//
// CREATE
const onCreateSuccess = (data) => {
  const listHTML = showlistTemplate({ list: data.contractor })
  $('#result-container').append(listHTML)
  $('#message').text('create Successfully!')
  $('#message').css('background-color', 'green')
  $('#message').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

const onCreateFailure = () => {
  $('#message').text('Error!!')
  $('#message').css('background-color', 'red')
  $('#message').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

// SHOW ALL
const onShowAllSuccess = (data) => {
  // console.log(data)
  const listHTML = showlistsTemplate({ lists: data.contractors })
  $('#result-container').append(listHTML)
  // $('#result-display').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

const onShowAllFailure = () => {
  $('#message').text('Error!!')
  $('#message').css('background-color', 'red')
  $('#message').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

// UPDATE
const OnUpdateSuccess = () => {
  $('#message').text('Update Successfully!')
  $('#message').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

const onUpdateFailure = () => {
  $('#message').text('Update Unsuccessfully!! Invalid ID!')
  $('#message').css('background-color', 'red')
  $('#message').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

// SHOW CONTRACTOR
const getContractorSuccess = (data) => {
  // console.log(data)
  const listHTML = showlistTemplate({ list: data.contractor })
  $('#result-container').append(listHTML)
  // $('#result-display').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

const getContractorFailure = () => {
  $('#message').text('Invalid Contractor ID #')
  $('#message').css('background-color', 'red')
  $('#message').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

// DELETE
const onDeleteSuccess = () => {
  $('#message').text('Delete Successfully!')
  $('#message').css('background-color', 'green')
  $('#message').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
  $('#table-container').html('')
}

const onDeleteFailure = () => {
  $('#message').text('Unable To Delete. Incorrect User')
  $('#message').css('background-color', 'red')
  $('#message').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}
module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onShowAllSuccess,
  onShowAllFailure,
  onUpdateFailure,
  OnUpdateSuccess,
  getContractorSuccess,
  getContractorFailure,
  onDeleteSuccess,
  onDeleteFailure
}

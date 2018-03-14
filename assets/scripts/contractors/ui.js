'use strict'
const showlistsTemplate = require('../templates/list.handlebars')
const showlistTemplate = require('../templates/partial.handlebars')
//
// CREATE
const onCreateSuccess = () => {
  console.log('create success')
}

const onCreateFailure = () => {
  $('#result-display').text('Error!!')
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

// SHOW ALL
const onShowAllSuccess = (data) => {
  console.log(data)
  const listHTML = showlistsTemplate({ lists: data.contractors })
  $('#result-container').append(listHTML)
  // $('#result-display').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

const onShowAllFailure = () => {
  $('#result-display').text('Error!!')
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

// UPDATE
const OnUpdateSuccess = () => {
  $('#result-display').text('Update Successfully!')
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

const onUpdateFailure = () => {
  $('#result-display').text('Update Unsuccessfully!! Invalid ID!')
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

// SHOW CONTRACTOR
const getContractorSuccess = (data) => {
  console.log(data)
  const listHTML = showlistTemplate({ list: data.contractor })
  $('#result-container').append(listHTML)
  // $('#result-display').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

const getContractorFailure = () => {
  $('#result-display').text('Invalid!')
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
}

// DELETE
const onDeleteSuccess = () => {
  $('#result-display').text('Delete Successfully!')
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300)
  $('.input-field').val('')
  $('#table-container').html('')
}

const onDeleteFailure = () => {
  $('#result-display').text('Delete Unsuccessfully!! Invalid ID!!')
  $('#result-display').fadeIn(1000).delay(1000).fadeOut(300)
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

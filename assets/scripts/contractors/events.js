'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// ON CREATE
const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createContractor(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

// ON SHOW-ALL
const onShowAll = function (event) {
  console.log('hey')
  event.preventDefault()
  api.showAllContractors()
    .then(ui.onShowAllSuccess)
    .catch(ui.onShowAllFailure)
}

//
// GET CONTRACTOR
const getContractor = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  console.log(data)
  api.getContractor(data.id)
    .then($('#result-container').empty())
    .then(ui.getContractorSuccess)
    .catch(ui.getContractorFailure)
}

// const onUpdate = function (event) {
//   const data = getFormFields(this)
//   console.log(data)
//   event.preventDefault()
//   store.data = data
//
// api.updateList(data)
//   .then(() => api.showAll(event))
//   .then($('.content').empty())
//   .then(ui.onUpdateSuccess)
//   .catch(ui.onUpdateFailure)
// }
//
//
// ON DELETE
const deleteContractor = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.deleteContractor(id)
    .then(() => onShowAll(event))
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

const addHandlers = () => {
  $('#new-contractor').on('submit', onCreate)
  $('#all-contractors').on('click', onShowAll)
  $('#search-contractor').on('submit', getContractor)
  $('#remove-contractor').on('click', '.list-delete', deleteContractor)
  $('')
}

module.exports = {
  addHandlers
}

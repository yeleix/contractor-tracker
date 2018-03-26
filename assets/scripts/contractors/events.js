'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
// const api = require('./api')
// const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

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
  event.preventDefault()
  api.showAllContractors()
    .then($('#result-container').empty())
    .then(ui.onShowAllSuccess)
    .catch(ui.onShowAllFailure)
}

//
// GET CONTRACTOR
const getContractor = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  // console.log(data)
  api.getContractor(data.id)
    .then($('#result-container').empty())
    .then(ui.getContractorSuccess)
    .catch(ui.getContractorFailure)
}

const onUpdate = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  // console.log(this)
  event.preventDefault()
  store.data = data

  api.updateContractor(data)
    // .then(() => api.showAll(event))
    // .then($('#result-container').empty())
    .then(ui.OnUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
//
// ON DELETE
const deleteContractor = (event) => {
  event.preventDefault()
  // grab the `data-id` attribute
  const id = event.target.dataset.id
  // console.log(event.target.dataset)
  // console.log('this is id')
  api.deleteContractor(id)
    // .then(() => api.showAllContractors(event))
    // .then($('#result-container').empty())
    .then(ui.onDeleteSuccess) // after deleting a list, refetch all lists
    .catch(ui.onDeleteFailure)
}

// const onSearch = function (event) {
//   const data = getFormFields(event.target)
//   event.preventDefault()
//   // console.log(data)
//   api.searchName()
//     .then($('#result-container').empty())
//     .then(ui.getContractorSuccess)
//     .catch(ui.getContractorFailure)
// }

const addHandlers = () => {
  $('#new-contractor').on('submit', onCreate)
  $('#all-contractors').on('click', onShowAll)
  $('#search-contractor').on('submit', getContractor)
  $('#result-container').on('click', '#list-delete', deleteContractor)
  // $('#remove-contractor').on('click', deleteContractor)
  $('#update-contractor').on('submit', onUpdate)
  // $('#result-container').on('click', '#partial-delete', deleteContractor)
}

module.exports = {
  addHandlers
}

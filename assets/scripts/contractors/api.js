'use strict'

const config = require('../config')
const store = require('../store')

//  JSON: create-contractors.sh
const createContractor = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/contractors',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// JSON: index-contractors.sh
const showAllContractors = function () {
  return $.ajax({
    url: config.apiOrigin + '/contractors',
    method: 'GET',
    headers: {
      // contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// JSON: show-contractor.sh
const getContractor = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/contractors/' + id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

//  JSON: update-contractor.sh
// const updateContractor = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/contractors/' + data.contractors.id,
//     method: 'PATCH',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

const updateContractor = function (data) {
  console.log(data)
  console.log(data.contractor.id)
  return $.ajax({
    url: config.apiOrigin + '/contractors/' + data.contractor.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: {
    //   'expiration_date': {
    //     'date': date,
    //     'item_name': item_name,
    //     'category': category
  })
}

//  JSON: delete-contractor.sh
const deleteContractor = function (id) {
  console.log(id)
  return $.ajax({
    url: config.apiOrigin + '/contractors/' + id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createContractor,
  showAllContractors,
  getContractor,
  updateContractor,
  deleteContractor
}

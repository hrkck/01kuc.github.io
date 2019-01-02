// ./models/state.js
const m = require('mithril')


let state = {
  searchedTag: '',
  searchTag: (e) => state.searchedTag = e.target.value
}

module.exports = state

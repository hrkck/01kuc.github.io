// ./models/state.js
// Simple State object
// Currently needed to hold a state when searching for a post by tag

const m = require('mithril')


let state = {
  searchedTag: '',
  searchTag: (e) => state.searchedTag = e.target.value,
  
  searchDisplayType: true,
  searchDisplayTypeReducer: (boolVal) => state.searchDisplayType = boolVal
}

module.exports = state

// ./views/SearchBox.js
// A simple SearchBox for finding the posts that matter


const m = require('mithril')
const state = require('../models/state')


const SearchBox = () => {  
  return {
    view: () =>
      m('div',
        m('input[type="text"][placeholder="search a tag"]', {value: state.searchedTag, oninput: state.searchTag})
      )
  }
}


module.exports = SearchBox

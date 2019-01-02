// ./views/SearchBox.js
const m = require('mithril')
const state = require('../models/state')

const SearchBox =  {
  view: () =>
    m('p',
      m('input[type="text"][placeholder="search a tag"]', {value: state.searchedTag, onchange: state.searchTag}),
      m('p', 'You are searching this => ' + state.searchedTag))
}

module.exports = SearchBox
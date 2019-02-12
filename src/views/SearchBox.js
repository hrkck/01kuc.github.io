// ./views/SearchBox.js
// A simple SearchBox for finding the posts that matter


const m = require('mithril')
const state = require('../models/state')


const SearchBox = () => {
  return {
    view: () =>
      m(".input-group.mb-3",
        m("input.form-control[aria-describedby='SearchTags'][aria-label='SearchTags'][placeholder='search tags'][type='text']", { value: state.searchedTag, oninput: state.searchTag }),
        m(".input-group-append",
          m("button.btn.btn-outline-secondary[id='SearchTagsCancelButton'][type='button']", { onclick: () => { state.changeSearchedTag('') } }, m.trust("&times;")))
      )
  }
}


module.exports = SearchBox

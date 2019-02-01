//./views/SearchSection

const m = require('mithril')
const state = require('../models/state')
const SearchType = require('./SearchType')
const SearchBox = require('./SearchBox')
const SearchTag = require('../models/SearchTag')
const ListTags = require('./ListTags')


const SearchSection = {
  view: () => 
    m('div.container-flow.row.border.align-items-center', 
      m(SearchBox),
      m(SearchType),
      m(ListTags),
      SearchTag(state.searchedTag, state.searchDisplayType),
    )
}


module.exports = SearchSection

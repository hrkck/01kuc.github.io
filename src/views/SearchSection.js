//./views/SearchSection

const m = require('mithril')
const state = require('../models/state')
const SearchType = require('./SearchType')
const SearchBox = require('./SearchBox')
const SearchTag = require('../models/SearchTag')
const ListTags = require('./ListTags')


const SearchSection = {
  view: () =>
    m("nav.navbar.navbar-light", { style: { "background-color": "#e3f2fd" } },
      m("form.container",
        m('div.col-lg-4.col-md-6.col-sm-9', m(SearchBox)),
        m('div.col-lg-3.col-md-4.col-sm-6', m(SearchType)),
        m('div.col-lg-5.col-md-12.container', m(ListTags)),
        m('.mt-2.mb-5'),
        m('div.col.container', SearchTag(state.searchedTag)),
      )
    )
}


module.exports = SearchSection

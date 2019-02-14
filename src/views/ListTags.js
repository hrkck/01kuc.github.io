// ./views/ListTags.js
// List all tags so I can know possible searches and search them quickly.


const m = require('mithril')
const state = require('../models/state')


const ListTags = () => {
  handleClick = (e) => {
    state.changeSearchedTag(state.searchedTag + e.explicitOriginalTarget.data + ',')
  }

  hyperTag = {
    view: (vnode) =>
      m("span.small",
        m("a.text-primary", { onclick: handleClick, value: vnode.attrs.v }, m('u',vnode.attrs.t)),
        '  •  ')
  }

  return {
    view: () =>
      m('div',
        state.listedTags.map(t => m(hyperTag, { v: t, t: t }))
      )
  }
}


module.exports = ListTags
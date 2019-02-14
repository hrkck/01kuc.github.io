// ./views/ListTags.js
// List all tags so I can know possible searches and search them quickly.


const m = require('mithril')
const state = require('../models/state')


const ListTags = () => {
  handleClick = (e) => {
    try {
      state.changeSearchedTag(state.searchedTag + e.explicitOriginalTarget.data + ',') // firefox
    }catch (er) {
      if (er instanceof TypeError) {
          state.changeSearchedTag(state.searchedTag + e.path[1].innerText + ',') // chrome
      }
    }
  }

  hyperTag = {
    view: (vnode) =>
      m("span.",
        m("a.small.text-primary", { onclick: handleClick, value: vnode.attrs.v }, m('u',vnode.attrs.t)),
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
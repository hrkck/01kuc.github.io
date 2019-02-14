// ./views/ListTags.js
// List all tags so I can know possible searches and search them quickly.


const m = require('mithril')
const state = require('../models/state')


const ListTags = () => {
  handleClick = (tag) => {
    state.changeSearchedTag(state.searchedTag + tag + ',')
  }

  hyperTag = {
    view: (vnode) =>
      m("span.",
        m("a.small.text-primary", { onclick: ()=>{handleClick(vnode.attrs.v)}, value: vnode.attrs.v }, m('u',vnode.attrs.t)),
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
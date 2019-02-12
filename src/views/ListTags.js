// ./views/ListTags.js
// List all tags so I can know possible searches and search them quickly.


const m = require('mithril')
const state = require('../models/state')


const ListTags = () => {  
  handleClick = (e) => {
    state.searchedTag = e.originalTarget.attributes.value.value
    state.filterListedTags()
  }
  hyperTag = {
    view: (vnode) => 
      m("span.small.text-primary", 
        m("a",  {onclick: handleClick, value: vnode.attrs.v}, vnode.attrs.t),
      ', ')
  }

  return {
    view: () => 
      m('div.col',
        [m(hyperTag, {v:'',t:'EMPTY'})].concat(state.listedTags.map(t=>m(hyperTag, {v:t,t:t})))
      )
  }
}


module.exports = ListTags
// ./views/ListTags.js
// List all tags so I can know possible searches and search them quickly.


const m = require('mithril')
const state = require('../models/state')
const posts = require('../../content/all_posts.js')


const ListTags = () => {
  handleClick = (e) => {
    state.searchedTag = e.originalTarget.attributes.value.nodeValue
  }
  hyperTag = {
      view: (vnode) => 
        m('span.small', 
          m('a.text-primary', {onclick: handleClick, value: vnode.attrs.v}, vnode.attrs.t),
        ', ')
  }
  
  let tags = []

  posts.forEach(post=>{tags.push(...post.tags.split(','))})
  tags = tags.filter((v, i, a) => a.indexOf(v) === i) // filter out the unique

  hyperTags = [m(hyperTag, {v:'',t:'EMPTY'})].concat(tags.map(t=>m(hyperTag, {v:t,t:t})))


  return {
    view: () => 
      m('div.col',
        m('ul', hyperTags)
      )
  }
}


module.exports = ListTags
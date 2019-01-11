const m = require('mithril')

const LayoutPost = require('./LayoutPost')
const Link = require('./Link')


const LayoutPostList = {
  view: vnode =>
    m('div',
      m(Link, {link: vnode.attrs.URL}, 'go to this post ->'),
      m('section', vnode.children)
  )
}


module.exports = LayoutPostList

const m = require('mithril')

const markdown = require('../helpers/renderMarkdown')
const Link = require('./Link')


const LayoutPostList = {
  view: vnode =>
    m('div.container', {id: vnode.attrs.URL},
      m(Link, {link: vnode.attrs.URL}, markdown('#'+vnode.attrs.title)),
      m('section', vnode.children)
  )
}


module.exports = LayoutPostList

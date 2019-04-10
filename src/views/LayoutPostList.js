const m = require('mithril')

const markdown = require('../helpers/renderMarkdown')
const Link = require('./Link')


const LayoutPostList = {
  view: vnode =>
    m('div.pt-3.pb-3', {id: vnode.attrs.URL},
      m(Link, {link: vnode.attrs.URL}, markdown('#'+vnode.attrs.title)),
      m('section', vnode.children)
  )
}


module.exports = LayoutPostList

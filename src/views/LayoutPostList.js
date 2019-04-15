const m = require('mithril')

const markdown = require('../helpers/renderMarkdown')
const Link = require('./Link')


const LayoutPostList = {
  view: vnode =>
    m('div.pt-3.pb-3', {id: vnode.attrs.URL},
      m(Link, {link: vnode.attrs.URL}, m('div.h1', m('span.text-secondary.font-weight-lighter', {}, new Date(vnode.attrs.date).toUTCString().slice(5,11) + ' '), m('span', vnode.attrs.title))),
      m('section', vnode.children)
  )
}


module.exports = LayoutPostList

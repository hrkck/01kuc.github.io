// ./views/PostTemplate.js
const m = require('mithril')

const PostTemplate = {
  oninit: (vnode) => {
    vnode.state.tags = vnode.attrs.tags
    vnode.state.URL = vnode.attrs.URL
  },
  view: (vnode) =>
    m('div',
      m('a', {href: '/', oncreate: m.route.link}, "go back!"),
      m('p', vnode.children),
      m('p', 'Categories: ' + vnode.state.tags),
      m('p', 'And my URL is ' + vnode.state.URL),
      m('a', {href: vnode.state.URL, oncreate: m.route.link}, "click here to navigate me! "),
      m('hr')
    )
}

module.exports = PostTemplate

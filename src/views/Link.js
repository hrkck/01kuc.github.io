const m = require('mithril')


const Link = {
  view: vnode => 
    m('span', 
      m('a', {href: vnode.attrs.link, oncreate: m.route.link}, vnode.children)
    )
  }


module.exports = Link

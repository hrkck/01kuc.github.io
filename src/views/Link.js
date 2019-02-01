const m = require('mithril')


const Link = {view: vnode => m('p', {style:{"margin":"15px 0 0 0 "}}, m('a', {href: vnode.attrs.link, oncreate: m.route.link}, vnode.children))}


module.exports = Link

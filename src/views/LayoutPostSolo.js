const m = require('mithril')

const Link = require('./Link')


const LayoutPostSolo = {
  view: vnode =>
    m('div.container.col-xs-12.col-sm-8.col-md-8.col-lg-5',
      m(Link, {link: vnode.attrs.baseUrl}, '<- go back '),
      m('section.text-justify', vnode.children)
  )
}


module.exports = LayoutPostSolo

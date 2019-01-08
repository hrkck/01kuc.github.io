// ./views/PostTemplate.js
// Anatomy of a Post
// Later, a post must have capabilities of
// - rendering mathematical expressions, (done)
// - rendering graph of a function(s) (done)
// - rendering highlighted code of many languages (done, but more to do)
// - looking good readable on devices
// - having a structure (tags, titles, content itself) (partially done)

// The aim of this hussle is to be able to create a simple blogging experience
// with simple Markdown editing, instant live update and deploying by a simple command
// As for markdown editing, currently, a markdown must be first converted to HTML here,
// https://markdowntohtml.com/
// And then converted to m() VNodes here
// http://arthurclemens.github.io/mithril-template-converter/index.html

// This problem is either need to be addressed,
// or blogging directly with VNodes must be accepted as a standard
// For my own part, I currently have a friendly experience with VNodes

const m = require('mithril')
const microlight = require('../helpers/microlight')

const PostTemplate = {
  oninit: (vnode) => {
    vnode.state.tags = vnode.attrs.tags
    vnode.state.URL = vnode.attrs.URL
  },
  oncreate: () => {
    microlight.reset();
  },
  view: (vnode) =>
    m('div', {id: vnode.state.URL},
      m('a', {href: '', oncreate: m.route.link}, "go back!"),
      m('p', vnode.children),
      m('p', 'Categories: ' + vnode.state.tags),
      m('p', 'And my URL is ' + vnode.state.URL),
      m('a', {href: vnode.state.URL, oncreate: m.route.link}, "click here to navigate me! "),
      m('hr')
    )
}

module.exports = PostTemplate

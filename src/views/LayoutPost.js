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
const markdown = require('../helpers/renderMarkdown')


const LayoutPost = {
  oncreate: () => {
    microlight.reset();
  },
  view: (vnode) =>
    m('div', {id: vnode.attrs.URL},
      m(PostTitle, {title: vnode.attrs.title}),
      m(PostProperties, {date: 'dateNotImplemented', tags: vnode.attrs.tags, URL: vnode.attrs.URL}),
      m(PostContent, vnode.children),
      m('hr'),
      m('br')
    )
}


const PostTitle = {view: vnode => markdown('# ' + vnode.attrs.title)}
const PostProperties = {view: vnode => markdown(vnode.attrs.date + ', ' + vnode.attrs.tags + ', ' + vnode.attrs.URL)}
const PostContent = {view: vnode => vnode.children}


module.exports = LayoutPost

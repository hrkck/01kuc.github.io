// ./helpers/renderMarkdown.js
// Converts:
// markdown => html => mithril vnodes

const templateBuilder = require('./htmltohypertext')
const showdown = require('showdown')
const converter = new showdown.Converter()

module.exports = (markdown) => {
  const m = require('mithril')
  const f = Function('m', "return " + templateBuilder({source: converter.makeHtml(markdown)}))
  return f(m)
}

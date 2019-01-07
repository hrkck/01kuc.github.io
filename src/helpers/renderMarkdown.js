// ./helpers/renderMarkdown.js
// Converts:
// markdown => html => hyperscript

const m = require('mithril')
const htmlToHyperscript = require('./htmlToHyperscript')
const showdown = require('showdown')
const converter = new showdown.Converter() // init converter

const renderMarkdown = (markdown) => Function('m', "return " + htmlToHyperscript({source: converter.makeHtml(markdown)}))(m)


module.exports = renderMarkdown;

// REFERENCES:
// See ./helpers/renderMath.js for more information about `Function(...)(...)`

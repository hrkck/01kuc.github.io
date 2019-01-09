// ./helpers/renderHTML.js
// Converts:
// HTML (as string) => hyperscript (as string) => hyperscript


const m = require('mithril')
const htmlToHyperscript = require('./htmlToHyperscript')


const html = str => Function('m', "return " + htmlToHyperscript({source: (str)}))(m)


module.exports = html;

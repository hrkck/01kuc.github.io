// ./helpers/renderHyperscript.js
// Converts:
// HTML (as string) => hyperscript (as string) => hyperscript


const m = require('mithril')

const hyperscript = str => Function('m', "return " + str)(m)


module.exports = hyperscript;

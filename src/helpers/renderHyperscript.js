// ./helpers/renderHyperscript.js
// Converts:
// HTML (as string) => hyperscript (as string) => hyperscript


const m = require('mithril')
const code = require('./renderCode')
const math = require('./renderMath')



const hyperscript = str => Function('m, code, math', "return " + str)(m, code, math)


module.exports = hyperscript;

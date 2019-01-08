// ./helpers/renderHTML.js

const m = require('mithril')
const htmlToHyperscript = require('./htmlToHyperscript')


const renderHTML = exp => Function('m', "return " + htmlToHyperscript({source: (exp)}))(m)

module.exports = renderHTML;

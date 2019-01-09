// ./helpers/renderCode.js
// A functional snippet to render block and inline code

// example:
// code('inline', `console.log('bla')`)


const m = require('mithril');


const code = (isBlock, str) => {
  if(isBlock === 'block' || (isBlock && isBlock !== 'inline')) return m('div', m('pre.microlight', m('code', str)))
  if(isBlock === 'inline' || (!isBlock && isBlock !== 'block')) return m('span', m('code.microlight', str))
}


module.exports = code

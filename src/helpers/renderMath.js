// ./helpers/renderMath.js
// Converts:
// ASCII math exp (as string) => TeX math exp (as string) => html (as string) => hyperscript (as string) => hyperscript


const m = require('mithril')
const katex = require('katex')
const htmlToHyperscript = require('./htmlToHyperscript')
const AsciiMathParser = require('./asciimath2tex')

let parser = new AsciiMathParser()


const math = (exp) => {
  let f = ''
  try {
    f = Function('m', "return " + htmlToHyperscript({source: katex.renderToString(parser.parse(exp)) }))
    return f(m)
  }catch (e) {
    if (e instanceof katex.ParseError) {
        // KaTeX can't parse the expression
        return ("Error in LaTeX '" + exp + "': " + e.message).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
}


module.exports = math

// REFERENCES:
// https://stackoverflow.com/questions/54058166/evaluate-a-function-call-given-as-a-string-which-was-declared-with-require
// https://katex.org/docs/error.html
// http://arthurclemens.github.io/mithril-template-converter/index.html

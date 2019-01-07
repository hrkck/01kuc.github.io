// ./helpers/renderMath.js
// Converts:
// ASCII math expression => TeX math expressions => html => Hyperscript

const m = require('mithril')
const katex = require('katex')
const htmlToHyperscript = require('./htmlToHyperscript')
const AsciiMathParser = require('./asciimath2tex')

const parser = new AsciiMathParser()


const renderMath = (exp) => {
  try {
    const f = Function('m', "return " + htmlToHyperscript({source: katex.renderToString(parser.parse(exp))}))
    return f(m)
  }catch (e) {
    if (e instanceof katex.ParseError) {
        // KaTeX can't parse the expression
        return ("Error in LaTeX '" + exp + "': " + e.message).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
}


module.exports = renderMath

// REFERENCES:
// https://stackoverflow.com/questions/54058166/evaluate-a-function-call-given-as-a-string-which-was-declared-with-require
// https://katex.org/docs/error.html
// http://arthurclemens.github.io/mithril-template-converter/index.html

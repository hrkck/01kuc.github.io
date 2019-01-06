const katex = require('katex')
const templateBuilder = require('./htmltohypertext')

module.exports = (exp) => {
  const m = require('mithril')
  try {
    const f = Function('m', 'exp', "return " + templateBuilder({source: katex.renderToString(exp)}))
    return f(m)
  }catch (e) {
    if (e instanceof katex.ParseError) {
        // KaTeX can't parse the expression
        return ("Error in LaTeX '" + exp + "': " + e.message).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
}

// REFERENCES:
// https://stackoverflow.com/questions/54058166/evaluate-a-function-call-given-as-a-string-which-was-declared-with-require
// https://katex.org/docs/error.html
// http://arthurclemens.github.io/mithril-template-converter/index.html

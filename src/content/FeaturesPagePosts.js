const m = require('mithril')

const graph = require('../helpers/renderGraph')
const markdown = require('../helpers/renderMarkdown')
const math = require('../helpers/renderMath')
const code = require('../helpers/renderCode')

let snippet =
`const renderMath = (exp) => {
  try {
    const f = Function('m', "return " + htmlToHyperscript({source: katex.renderToString(parser.parse(exp))}))
    return f(m)
  }catch (e) {
    if (e instanceof katex.ParseError) {
      // KaTeX can't parse the expression
      return ("Error in LaTeX '" + exp + "': " + e.message).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
}`


let t1 = 'a,b'
let t2 = 'c,a'
let t3 = 'katex,math'
let t4 = 'plot,draw'
let t5 = 'code,javascript,highlight'

let c1 = 'First Post'
let c2 = markdown('# hello, markdown!')
let c3 = m('p', 'math inline ', math('i = oo'), ' and math block, ', m('div', math('sum_(i=1)^n i^3=((n(n+1))/2)^2')))
let c4 = m('div', graph(10, 2, 'x', '-x+10', '1/10*x**2', 'x**3', 'Math.sin(x)', 'Math.cos(x)', '-x', '-5', '-7'))
let c5 = m('div', code('block', snippet), m('p', 'here is an inline code ', code('inline', `console.log('That is the way it is done!')`), ' snippet'))


let url1 = 'firstPost'
let url2 = 'secondPost'
let url3 = 'katex-example'
let url4 = 'plot-example'
let url5 = 'code-highlight'

let FeaturesPagePosts = {
  contents: {
    [url1]: c1,
    [url2]: c2,
    [url3]: c3,
    [url4]: c4,
    [url5]: c5
  },
  tags: {
    [url1]:t1,
    [url2]:t2,
    [url3]:t3,
    [url4]:t4,
    [url5]:t5
  }
}

module.exports = FeaturesPagePosts

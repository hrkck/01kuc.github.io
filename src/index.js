const m = require('mithril')

const graph = require('./helpers/renderGraph')
const oldGraph = require('./helpers/renderOldGraph')
const markdown = require('./helpers/renderMarkdown')
const math = require('./helpers/renderMath')
const code = require('./helpers/renderCode')

let state = require('./models/state')
const routes = require('./models/routes')

const Graph = require('./views/Graph')
const SearchBox = require('./views/SearchBox')
const PostTemplate = require('./views/PostTemplate')
const NextPage = require('./views/NextPage')
const SearchTag = require('./models/SearchTag')
const Posts = require('./models/Posts')


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
let t6 = 'plot,draww'
let t5 = 'code,javascript,highlight'
let c1 = 'First Post'
let c2 = markdown('# hello, markdown!')
let c3 = m('p', 'math ', m('p', math('sum_(i=1)^n i^3=((n(n+1))/2)^2')))
let c4 = m('div', graph(10, 2, '-x + 10', '', 'x', 'Math.pow(x,2) - 10'))
let c5 = m('div', code('block', snippet), m('p', 'here is an inline code ', code('inline', `console.log('That is the way it is done!')`), ' snippet'))
let c6 = m('div', oldGraph('Math.sin(x)', 'Math.cos(x)', 'x', 'Math.pow(x,2)'))


let url1 = 'firstPost'
let url2 = 'secondPost'
let url3 = 'katex-example'
let url4 = 'plot-example'
let url5 = 'code-highlight'
let url6 = 'old-graph'


let base = {
  [t4]: c4,
  [t6]: c6,
  [t1]: c1,
  [t2]: c2,
  [t3]: c3,

  [t5]: c5
}
let attrs = {
  [t1]: url1,
  [t2]: url2,
  [t3]: url3,
  [t4]: url4,
  [t5]: url5,
  [t6]: url6
}


const Main = {
  view: () =>
    m('div',
      m('h1', 'Hello World! made with Mithril js'),
      Posts(base, attrs),
      m('p', 'Seach any tag seperated by a comma, the post will appear below.'),
      m(SearchBox),
      SearchTag(state.searchedTag, base, attrs),
      m('a', {href: 'nextPage', oncreate: m.route.link}, 'click here to navigate to the next page.')
    )
}


routes.addComponentRoute('', Main)
routes.addComponentRoute('nextPage', NextPage)
m.route(document.body, '', routes.routes)


// Still in the game and kickin'
// https://www.youtube.com/watch?v=rog8ou-ZepE

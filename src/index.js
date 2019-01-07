const m = require('mithril')

const renderGraph = require('./helpers/renderGraph')
const renderMarkdown = require('./helpers/renderMarkdown')
const renderMath = require('./helpers/renderMath')

let state = require('./models/state')
const routes = require('./models/routes')

const Graph = require('./views/Graph')
const SearchBox = require('./views/SearchBox')
const PostTemplate = require('./views/PostTemplate')
const NextPage = require('./views/NextPage')
const SearchTag = require('./models/SearchTag')
const Posts = require('./models/Posts')



let t1 = "a,b"
let t2 = "c,a"
let t3 = 'katex,math'
let t4 = 'plot,draw'
let c1 = "First Post"
let c2 = renderMarkdown('# hello, markdown!')
let c3 = m('p', 'math ', m('p', renderMath('sum_(i=1)^n i^3=((n(n+1))/2)^2')))
let c4 = m('div', renderGraph('Math.sin(x)', 'Math.cos(x)', 'x'))
let url1 = 'firstPost'
let url2 = 'secondPost'
let url3 = 'katex-example'
let url4 = 'plot-example'


let base = {
  [t1]: c1,
  [t2]: c2,
  [t3]: c3,
  [t4]: c4
}

let attrs = {
  [t1]: url1,
  [t2]: url2,
  [t3]: url3,
  [t4]: url4
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

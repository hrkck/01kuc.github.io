const m = require('mithril')
let state = require('./models/state')
const routes = require('./models/routes')

const SearchBox = require('./views/SearchBox')
const PostTemplate = require('./views/PostTemplate')
const NextPage = require('./views/NextPage')
const SearchTag = require('./models/SearchTag')
const Posts = require('./models/Posts')


let t1 = "a,b"
let t2 = "c,a"
let c1 = "First Post"
let c2 = "Second Post"
let url1 = 'firstPost'
let url2 = 'secondPost'

// Currently Mathjax only works in the main page.
// One solution proposal:
// MathJax needs to be reloaded each time an expression is given.
// In react, this problem is solved with the following npm package:
// https://github.com/wko27/react-mathjax
// this is the most archaic git repo I could find on the topic:
// https://github.com/SamyPesse/react-mathjax
// If the concepts above are applied to Mithril, my problem is also supposed to be solved.
// So I might as well be the person who introduced Mathjax imlementation to Mithril.


let t3 = 'math,ascii'
let c3 = 'If you click the following link, this Math formula will NOT be displayed correctly. `int f(x) dx = F(x) + C`'
let url3 = 'mathjax-example'

let load_mathjax = m('script', {type:'text/javascript', async:true, src:'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML'})


let base = {
  [t1]: c1,
  [t2]: c2,
  [t3]: [load_mathjax, m('p', c3)]
}

let attrs = {
  [t1]: url1,
  [t2]: url2,
  [t3]: url3
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

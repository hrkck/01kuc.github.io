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
let url1 = '/firstPost'
let url2 = '/secondPost'


let base = {
  [t1]: c1,
  [t2]: c2,
  'math,ascii': 'The formula of Integral goes as: `int f(x) dx = F(x) + C`'
}

let attrs = {
  [t1]: url1,
  [t2]: url2,
  'math,ascii': '/mathjax-example' // does not render when navigated to ???
}


const Main = {
  view: () =>
    m('div',
      m('h1', 'Hello World! made with Mithril js'),
      Posts(base, attrs),
      m('p', 'Seach any tag seperated by a comma, the post will appear below.'),
      m(SearchBox),
      SearchTag(state.searchedTag, base, attrs),
      m('a', {href: '/nextPage/', oncreate: m.route.link}, 'click here to navigate to the next page.')
    )
}


routes.addComponentRoute('/', Main)
routes.addComponentRoute('/nextPage', NextPage)
m.route(document.body, '/', routes.routes)


// Still in the game and kickin'
// https://www.youtube.com/watch?v=rog8ou-ZepE

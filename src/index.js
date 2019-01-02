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
  [t2]: c2
}

let attrs = {
  [t1]: url1,
  [t2]: url2
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
// m.route.prefix('') // reconfig #!
// const r = 'archetypum.github.io/'
m.route(document.body, '/', routes.routes)

// Currently, entering to a link in the webpage directly,
// makes the page remain in 404.html file. URL is correct but no routing made.

// Still the same.

// Using hash-bang strategy (by default) now. Everything works as expected.

// Still in the game and kickin'
// https://www.youtube.com/watch?v=ISmgOrhELXs&start_radio=1&list=RDISmgOrhELXs

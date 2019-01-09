const m = require('mithril')



let state = require('./models/state')
const routes = require('./models/routes')

const SearchBox = require('./views/SearchBox')
const PostTemplate = require('./views/PostTemplate')
const FeaturesPage = require('./views/FeaturesPage')
const SearchTag = require('./models/SearchTag')
const Posts = require('./models/Posts')


const Main = {
  view: () =>
    m('div',
      m('h1', 'Hello World! made with Mithril js'),
      m('a', {href: 'FeaturesPage', oncreate: m.route.link}, 'click here to navigate to the next page.')
    )
}


routes.addComponentRoute('', Main)
routes.addComponentRoute('FeaturesPage', FeaturesPage)

let FeaturesPagePosts = require('./content/FeaturesPagePosts')
routes.addVnodeRoutes(FeaturesPagePosts.contents, FeaturesPagePosts.tags)

console.log(routes.routes)

m.route(document.body, '', routes.routes)


// Still in the game and kickin'
// https://www.youtube.com/watch?v=rog8ou-ZepE

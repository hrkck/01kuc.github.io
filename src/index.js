const m = require('mithril')

let state = require('./models/state')
const routes = require('./models/routes')

const SearchBox = require('./views/SearchBox')
const FeaturesPage = require('./views/FeaturesPage')
const SearchTag = require('./models/SearchTag')
const Link = require('./views/Link')

const Main = {
  view: () =>
    m('div',
      m('h1', 'Hello World! made with Mithril js'),
      m(Link, {link: 'FeaturesPage'}, 'click here to navigate to the Features page.'),
      m(SearchBox),
      SearchTag(state.searchedTag),
    )
}


routes.addComponentRoute('', Main)
routes.addComponentRoute('FeaturesPage', FeaturesPage)
routes.addVnodeRoutes() // adds all content to the routes

m.route(document.body, '', routes.routes)

// Still in the game and kickin'
// https://www.youtube.com/watch?v=rog8ou-ZepE
// https://www.youtube.com/watch?v=EC7Re8cczj0&start_radio=1&list=RDEC7Re8cczj0

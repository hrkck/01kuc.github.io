const m = require('mithril')

const routes = require('./models/routes')

const SearchSection = require('./views/SearchSection')
const FeaturesPage = require('./views/FeaturesPage')
const CreatePost = require('./views/CreatePost')
const Link = require('./views/Link')


const Main = {
  view: () =>
    m('div.container.p-0',
      m('div.container',
        m('h2', 'Hello World! made in Mithril js'),
        m('p', 'Lest it becomes as strong as Mithril from Misty Mountains...'),
        m('p', m(Link, {link: 'CreatePost'}, 'click here to create a post -> ')),
      ),
      m(SearchSection),
    )
}


routes.addComponentRoute('', Main)
routes.addComponentRoute('FeaturesPage', FeaturesPage)
routes.addComponentRoute('CreatePost', CreatePost)
routes.addVnodeRoutes() // adds all content to the routes

m.route(document.body, '', routes.routes)

// Still in the game and kickin'
// https://www.youtube.com/watch?v=rog8ou-ZepE
// https://www.youtube.com/watch?v=EC7Re8cczj0&start_radio=1&list=RDEC7Re8cczj0

const m = require('mithril')

const routes = require('./models/routes')

const PostsByDate = require('./views/PostsByDate')

const NavigationSection = require('./views/NavigationSection')
const SearchSection = require('./views/SearchSection')
const FeaturesPage = require('./views/FeaturesPage')
const CreatePost = require('./views/CreatePost')
const PrototypePage = require("./views/PrototypePage")
const TranslateAPI = require("./views/TranslateAPI")
const Link = require('./views/Link')

const CountDown = require('./views/CountDown')

const markdown = require('./helpers/renderMarkdown')

const Main = {
  view: () =>
    m('div.container.p-0',
      m('div.container',
        [
          markdown(`##Welcome to my blog!
          This is where I post stuff I like or demonstrate/document cool things I do as learning projects. This website itself\
          is one!`),
          m("p", 
            "You can search some tags to start reading things. Or check out ", 
            m('span', m(Link, { link: 'CreatePost' }, 'the coolest page')),
            " on this website, where I actually write a post for this blog. Also head to ", m('span', m(Link, { link: 'PrototypePage' }, 'this page')), " to see where I prototype a page or experiment features."
          ),
          markdown(`Find me on [github](https://github.com/01kuc), [twitter](https://twitter.com/01kuc) or [linkedin](https://www.linkedin.com/in/hrkucuk/)`)
        ]
      ),
      m(NavigationSection, {latest_posts: m('div.col.container', PostsByDate()),search_tag:m(SearchSection)}),
    )
}


routes.addComponentRoute('', Main)
routes.addComponentRoute('FeaturesPage', FeaturesPage)
routes.addComponentRoute('CountDown', CountDown)
routes.addComponentRoute('CreatePost', CreatePost)
routes.addComponentRoute('PrototypePage', PrototypePage)
routes.addComponentRoute('TranslateAPI', TranslateAPI)
routes.addVnodeRoutes() // adds all content to the routes

m.route(document.body, '', routes.routes)

// Still in the game and kickin'
// https://www.youtube.com/watch?v=rog8ou-ZepE
// https://www.youtube.com/watch?v=EC7Re8cczj0&start_radio=1&list=RDEC7Re8cczj0

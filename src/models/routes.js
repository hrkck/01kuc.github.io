// ./models/routes.js
// You can add a Vnode or a Component using the functions
// A Vnode must be converted to a Component


const m = require('mithril')
const PostTemplate = require('../views/PostTemplate')


const routes = {
  routes: {},
  addVnodeRoute: (key, value) => routes.routes[key] = {view: () => value},
  addVnodeRoutes: (contents, tags) => {
    let currentPost = undefined
    for(var url in contents){
      currentPost = m(PostTemplate, {tags: tags[url], URL: url}, contents[url])
      routes.addVnodeRoute(url, currentPost)
    }
  },
  addComponentRoute: (key, value) => routes.routes[key] = value
}

module.exports = routes;

// References:
// https://mithril.js.org/route.html

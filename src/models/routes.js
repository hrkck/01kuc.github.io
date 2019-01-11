// ./models/routes.js
// You can add a Vnode or a Component using the functions
// A Vnode must be converted to a Component


const m = require('mithril')
const AllPosts = require('../content/AllPosts')
const PostSolo = require('./PostSolo')


const routes = {
  routes: {},
  addVnodeRoute: (key, value) => routes.routes[key] = {view: () => value},
  addVnodeRoutes: () => {
    let currentPost = undefined
    for(let baseurl in AllPosts){
      for(let url in AllPosts[baseurl]){
        po = AllPosts[baseurl][url]
        currentPost = PostSolo(baseurl, url, po.title, po.tags, po.content)
        routes.addVnodeRoute(url, currentPost)
      }
    }
  },
  addComponentRoute: (key, value) => routes.routes[key] = value
}

module.exports = routes;

// References:
// https://mithril.js.org/route.html

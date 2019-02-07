// ./models/routes.js
// You can add a Vnode or a Component using the functions
// A Vnode must be converted to a Component


const posts = require('../../content/all_posts')
const PostSolo = require('./PostSolo')


const routes = {
  routes: {},
  addVnodeRoute: (key, value) => routes.routes[key] = {view: () => value},
  addVnodeRoutes: () => {
    let currentPost = undefined
    for(let post of posts){
      currentPost = PostSolo(post.title, post.tags, post.url, post.baseUrl, post.date, post.markdown)
      routes.addVnodeRoute(post.url, currentPost)      
    }
  },
  addComponentRoute: (key, value) => routes.routes[key] = value
}


module.exports = routes;

// References:
// https://mithril.js.org/route.html

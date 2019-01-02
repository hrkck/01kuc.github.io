// ./models/Posts
// Generate lists of posts and add them to the routes
const m = require('mithril')
const PostTemplate = require('../views/PostTemplate')
const routes = require('./routes');
const Posts = (base, attrs) => {
  let list = []
  let currentPost = undefined
  for(var tags in base){
    currentPost = m(PostTemplate, {tags: tags, URL: attrs[tags]}, base[tags])
    list.push(currentPost)
    routes.addVnodeRoute(attrs[tags], currentPost)
  }
  return list
}

module.exports = Posts;

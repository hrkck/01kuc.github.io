// ./models/Posts
// Generate lists of posts and add them to the routes
// A post is generated through m() so it can be displayed in a 'view' property

// TODO:
// Here, base and attrs parameters are temporary solutions.
// They can be found in index.js

const m = require('mithril')
const routes = require('./routes');
const PostTemplate = require('../views/PostTemplate')

const Posts = (contents, tags) => {
  let list = []
  let currentPost = undefined
  for(var url in contents){
    currentPost = m(PostTemplate, {tags: tags[url], URL: url}, contents[url])
    list.push(currentPost)
    routes.addVnodeRoute(tags[url], currentPost)
  }
  return list
}

module.exports = Posts;

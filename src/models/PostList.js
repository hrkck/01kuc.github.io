// ./models/Post
// Create and return a Post with List Layout


const m = require('mithril')
const LayoutPostList = require('../views/LayoutPostList')
const Post = require('./Post')


const PostList = (url, title, tags, content) =>
  m(LayoutPostList, {URL: url},
    Post(url, title, tags, content)
  )


module.exports = PostList

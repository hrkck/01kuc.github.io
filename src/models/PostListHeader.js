// ./models/PostListHeader
// Create and return a Post with List Layout but Header only


const m = require('mithril')
const LayoutPostList = require('../views/LayoutPostList')
const Post = require('./Post')


const PostListHeader = (url, date, title, tags) =>
  m(LayoutPostList, {URL: url},
    Post(url, date, title, tags, '')
  )


module.exports = PostListHeader

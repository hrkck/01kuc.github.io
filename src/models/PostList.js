// ./models/Post
// Create and return a Post with List Layout


const m = require('mithril')
const LayoutPostList = require('../views/LayoutPostList')
const Post = require('./Post')


const PostList = (title, tags, url, date, content) =>
  m(LayoutPostList, {title: title, URL: url}, Post(' ', tags, url, date, content))


module.exports = PostList

// ./models/PostListHeader
// Create and return a Post with List Layout but Header only


const m = require('mithril')
const LayoutPostList = require('../views/LayoutPostList')
const Post = require('./Post')


const PostListHeader = (title, tags, url, date) =>
  m(LayoutPostList, {title: title, URL: url}, Post(' ', tags, url, date, ''))


module.exports = PostListHeader

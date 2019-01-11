// ./models/Post
// Create and return a Post with Solo Layout


const m = require('mithril')
const LayoutPostSolo = require('../views/LayoutPostSolo')
const Post = require('./Post')


const PostSolo = (baseurl, url, title, tags, content) =>
  m(LayoutPostSolo, {baseURL: baseurl},
    Post(url, title, tags, content)
  )


module.exports = PostSolo

// ./models/Post
// Create and return a Post with Solo Layout


const m = require('mithril')
const LayoutPostSolo = require('../views/LayoutPostSolo')
const Post = require('./Post')


const PostSolo = (title, tags, url, baseurl, date, content) =>
  m(LayoutPostSolo, {baseUrl: baseurl},
    Post(title, tags, url, date, content)
  )


module.exports = PostSolo

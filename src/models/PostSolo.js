// ./models/Post
// Create and return a Post with Solo Layout


const m = require('mithril')
const LayoutPostSolo = require('../views/LayoutPostSolo')
const Post = require('./Post')


const PostSolo = (baseurl, url, date, title, tags, content) =>
  m(LayoutPostSolo, {baseUrl: baseurl},
    Post(url, date, title, tags, content)
  )


module.exports = PostSolo

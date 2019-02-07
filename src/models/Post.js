// ./models/Post
// Create and return a post


const m = require('mithril')
const LayoutPost = require('../views/LayoutPost')


const Post = (title, tags, url, date, content) => 
  m(LayoutPost, { title: title, tags: tags, URL: url, date: date,  content: content })


module.exports = Post

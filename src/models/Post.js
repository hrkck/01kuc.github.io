// ./models/Post
// Create and return a post


const m = require('mithril')
const LayoutPost = require('../views/LayoutPost')


const Post = (url, date, title, tags, content) => m(LayoutPost, {URL: url, date: date, title: title, tags: tags, content: content})


module.exports = Post

// ./models/Post
// Create and return a post


const m = require('mithril')
const LayoutPost = require('../views/LayoutPost')


const Post = (url, title, tags, content) => m(LayoutPost, {URL: url, title: title, tags: tags, date: 'notImplemented'}, content)


module.exports = Post

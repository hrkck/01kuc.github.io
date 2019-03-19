// ./models/PostsByDate.js

const posts = require('../../content/all_posts')
const PostListHeader = require('../models/PostListHeader')


const PostsByDate = () => {
  let list = []

  for(let post of posts){
    if(!post.tags.includes('uncategorized')) list.push(PostListHeader(post.title, post.tags, post.url, post.date))
  }
  return list.reverse()
}


module.exports = PostsByDate;

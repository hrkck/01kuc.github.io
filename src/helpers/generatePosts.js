// ./models/Posts
// Generate lists of posts and add them to the routes
// A post is generated through m() so it can be displayed in a 'view' property
// This is a very easy function to generate a list of posts.
// It will usually be needed to generate posts for a page, or to generate all posts in a blog-manner

// TODO: DONE
// Here, base and attrs parameters are temporary solutions.
// They can be found in index.js /// NO MORE RELEVANT

const m = require('mithril')
const routes = require('../models/routes');
const AllPosts = require('../content/AllPosts')
const PostList = require('../models/PostList')


const generatePosts = (baseURL = '') => {
  let list = []
  let currentPost = undefined
  let po = undefined // postObject

  if(baseURL === ''){
    for(let baseurl in AllPosts){
      for(let url in AllPosts[baseurl]){
        po = AllPosts[baseurl][url]
        currentPost = PostList(baseurl, url, po.title, po.tags, po.content)
        list.push(currentPost)
      }
    }
  }else{
    for(let url in AllPosts[baseURL]){
      po = AllPosts[baseURL][url]
      currentPost = PostList(url, po.title, po.tags, po.content)
      list.push(currentPost)
    }
  }
  return list
}


module.exports = generatePosts;

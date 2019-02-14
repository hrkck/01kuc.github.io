// ./models/SearchTag.js
// Given an input, return list of posts that includes this input as one of their tag
// Input can be a tag or many tags seperated by comma
// If any of the tags satisfy the case, the Post will be added to the list.


// TODO: DONE
// Here, base and attrs parameters are temporary solutions.
// They can be found in index.js // NO MORE RELEVANTs

const state = require('./state')
const posts = require('../../content/all_posts')
const PostListFull = require('./PostListFull')
const PostListHeader = require('./PostListHeader')


const SearchTag = (targetTag, isDisplayHeader) => {
  if(targetTag === '') return undefined
  if(isDisplayHeader === undefined) isDisplayHeader = state.searchDisplayType
  

  let targetTags = targetTag.split(',') // split into a list
  let list = []
  let addPost = undefined

  for(let post of posts){
    if(targetTags.some(a => post.tags.split(',').some(tag => tag.toLowerCase().includes(a.toLowerCase())))){
      if(isDisplayHeader) addPost = PostListHeader(post.title, post.tags, post.url, post.date)
      else addPost = PostListFull(post.title, post.tags, post.url, post.date, post.markdown)
      list.push(addPost)
    }
  }
  return list
}


module.exports = SearchTag;

// REFERENCES
// https://stackoverflow.com/a/39893636

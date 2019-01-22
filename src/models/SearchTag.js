// ./models/SearchTag.js
// Given an input, return list of posts that includes this input as one of their tag
// Input can be a tag or many tags seperated by comma
// If any of the tags satisfy the case, the Post will be added to the list.


// TODO: DONE
// Here, base and attrs parameters are temporary solutions.
// They can be found in index.js // NO MORE RELEVANTs


const AllPosts = require('../content/AllPosts')
const PostList = require('./PostList')


const SearchTag = (targetTag) => {
  if(targetTag === '') return undefined
  let targetTags = targetTag.split(',') // split into a list
  let list = []

  for(let baseurl in AllPosts){
    for(let url in AllPosts[baseurl]){
      po = AllPosts[baseurl][url]
      if(targetTags.some(a => po.tags.split(',').some(tag => tag.toLowerCase().includes(a.toLowerCase())))){
        list.push(PostList(url, po.title, po.tags, po.content))
      }
    }
  }
  return list
}


module.exports = SearchTag;

// REFERENCES
// https://stackoverflow.com/a/39893636

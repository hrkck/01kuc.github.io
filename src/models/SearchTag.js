// ./models/SearchTag.js
// Given an input, return list of posts that includes this input as one of their tag
// Input can be a tag or many tags seperated by comma
// If any of the tags satisfy the case, the Post will be added to the list.


// TODO:
// Here, base and attrs parameters are temporary solutions.
// They can be found in index.js

const m = require('mithril')
const PostTemplate = require('../views/PostTemplate')


const SearchTag = (targetTag, base, attrs) => {
  if(targetTag === '') return undefined
  let targetTags = targetTag.split(',') // split into a list
  let list = []

  for(var originalTags in base){
    if(targetTags.some(targetTag => originalTags.split(',').includes(targetTag))){
      list.push(m(PostTemplate, {tags: originalTags, URL: attrs[originalTags]}, base[originalTags]))
    }
  }
  return list
}

module.exports = SearchTag;

// REFERENCES
// https://stackoverflow.com/a/39893636

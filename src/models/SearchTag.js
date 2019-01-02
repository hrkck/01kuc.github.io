// ./models/SearchTag.js
const m = require('mithril')
const PostTemplate = require('../views/PostTemplate')


const SearchTag = (targetTag, base, attrs) => {
  //  https://stackoverflow.com/a/39893636
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

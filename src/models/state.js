// ./models/state.js
// Simple State object
// Currently needed to hold a state when searching for a post by tag

const posts = require('../../content/all_posts')

let state = {
  searchedTag: '',
  searchTag: (e) => {
    state.searchedTag = e.target.value
    state.filterListedTags()
  },
  changeSearchedTag: (tag) => {
    state.searchedTag = tag
    state.filterListedTags()
  },

  searchDisplayType: localStorage['isDisplay'] == 'header_post' ? true : false,
  searchDisplayTypeReducer: (boolVal) => state.searchDisplayType = boolVal,

  listedTags: posts.map(post => post.tags).join(',').split(',').filter((v, i, a) => a.indexOf(v) === i).sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }),
  filterListedTags: () => {
    let all_tags = posts.map(post => post.tags).join(',').split(',').filter((v, i, a) => a.indexOf(v) === i).sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    })
    state.listedTags = []
    for (let tag of all_tags) {
      if (state.searchedTag.split(',').some(targetTag => tag.toLowerCase().includes(targetTag.toLowerCase()))) {
        state.listedTags.push(tag)
      }
    }
  }
}

module.exports = state

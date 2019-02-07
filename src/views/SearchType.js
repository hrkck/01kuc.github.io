// ./views/SearchDisplayType.js
// A simple SearchType with two radio buttons for displaying 


const m = require('mithril')
const state = require('../models/state')


const SearchDisplayType = () => {

  let isDisplay = localStorage['isDisplay'] || 'header_post'

  changeDisplay = (e) => {
    isDisplay = e.target.value
    localStorage['isDisplay'] = isDisplay
    const boolVal = isDisplay === 'header_post'? true:false
    console.log(boolVal)
    state.searchDisplayTypeReducer(boolVal)
  }

  return {
    view: () => 
      m('div', 
        m('div.container',
          m('div.col',
            m('input[type="radio"][name="post_show_type"][value="header_post"]', {checked:isDisplay==='header_post', onchange: changeDisplay}),
            m('label','show only post header'),
          ),
          m('div.col',
            m('input[type="radio"][name="post_show_type"][value="full_post"]', {checked:isDisplay==='full_post', onchange: changeDisplay}, "show full post"),
            m('label', 'show full post'),
          ),
        )
      ),
  }
}

module.exports = SearchDisplayType
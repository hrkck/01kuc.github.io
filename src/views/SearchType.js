// ./views/SearchDisplayType.js
// A simple SearchType with two radio buttons for displaying 


const m = require('mithril')
const state = require('../models/state')


const SearchDisplayType = () => {
  let isDisplay = localStorage['isDisplay'] || 'header_post'
  let boolVal = false

  changeDisplay = (bool) => {
    isDisplay = bool
    localStorage['isDisplay'] = isDisplay
    boolVal = isDisplay == 'header_post' ? true : false
    state.searchDisplayTypeReducer(boolVal)
  }

  return {
    view: () =>
      m("div",
        m(".custom-control.custom-radio",
          m("input.custom-control-input[id='displayTypeRadio1'][name='displayType'][type='radio'][value='header_post']", { checked: isDisplay === 'header_post', onchange: (e)=>{changeDisplay(e.target.value)} }),
          m("label.custom-control-label[for='displayTypeRadio1']", "show only header")
        ),
        m(".custom-control.custom-radio",
          m("input.custom-control-input[id='displayTypeRadio2'][name='displayType'][type='radio'][value='full_post']", { checked: isDisplay === 'full_post', onchange: (e)=>{changeDisplay(e.target.value)} }),
          m("label.custom-control-label[for='displayTypeRadio2']", "show full post")
        )
      )
  }
}


module.exports = SearchDisplayType
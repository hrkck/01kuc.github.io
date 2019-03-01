// ./views/PrototypePage.js
// The page to Prototype Pages


const m = require('mithril')

const Link = require('./Link')
const htmlToHyperscript = require('../helpers/htmlToHyperscript')
const hyperscript = require('../helpers/renderHyperscript')


const PrototypePage = () => {

  let rawHTML = localStorage['rawHTML'] || ''
  let convertedHyperscript = ''
  let convertedHyperscript_rendered = ''

  convertHTML = function (value) {
    rawHTML = value
    localStorage['rawHTML'] = value
    convertedHyperscript = htmlToHyperscript({ source: rawHTML, indent: '2' })
    renderConvertedHTML(convertedHyperscript)
  }

  renderConvertedHTML = function (hyperscr) {
    convertedHyperscript = hyperscr
    convertedHyperscript_rendered = hyperscript(convertedHyperscript)
  }

  return {
    view: () =>
      m('div.container-fluid',
        m('div.container',
          m(Link, { link: '' }, '<- go back '),
          m('div',
            m('hr'),
            m('br')
          ),
          m('div',
            m('h3', 'HTML to Hyperscript converter'), m('br'),
            m('.container-fluid.row.m-0.p-0',
              m('div.col-sm-12.col-md-6.col-lg-4.p-0',
                m('p', 'Enter HTML:'),
                m('textarea.col-12[name="rawHTML-area"][style="min-height:70vh;"]', { oninput: (e) => { convertHTML(e.target.value) }, onmouseover: (e) => { convertHTML(e.target.value) }, value: rawHTML }),
              ),
              m('div.col-sm-12.col-md-6.col-lg-4.p-0',
                m('p', 'See and edit Hyperscipt further:'),
                m('textarea.col-12.word-wrap.border.border-info[style="min-height:70vh;max-height:70vh;overflow-y: scroll;"]', { style: { 'white-space': 'pre' }, oninput: (e) => { renderConvertedHTML(e.target.value) }, value: convertedHyperscript }),
                m('div.mt-1.mb-5')
              ),
              m('div.col-md-12.col-lg-4.p-0',
                m('p', 'See the rendered hyperscript:'),
                m('div.col-12.word-wrap.border.border-info[style="min-height:70vh;max-height:70vh;overflow-y: scroll;"]', convertedHyperscript_rendered),
                m('div.mt-1.mb-5')
              )
            )
          ),
          m('hr'), m('br')
        )
      )
  }
}


module.exports = PrototypePage;

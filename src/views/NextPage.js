// ./views/NextPage.js
// A demonstration of basic routing in Mithril JS

const m = require('mithril')

const NextPage = {
  view: () =>
    m('div',
      m('p', 'This is the next page.'),
      m('a', {href: '/', oncreate: m.route.link}, 'go back')
    )
}

module.exports = NextPage;

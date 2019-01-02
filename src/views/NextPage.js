// ./views/NextPage.js
const m = require('mithril')

const NextPage = {
  view: () =>
    m('div',
      m('p', 'This is the next page.'),
      m('a', {href: '/', oncreate: m.route.link}, 'go back')
    )
}

module.exports = NextPage;

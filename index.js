const m = require('mithril')

const Main = {
  view: function(){
    return m('div', [
      m('h1', 'Hello World! made with Mihtril js'),
      m('a', {href: '/nextPage/', oncreate: m.route.link}, 'click here to navigate to the next page.')
    ])
  }
}

const NextPage = {
  view: function(){
    return m('div', [
      m('p', 'This is the next page.'),
      m('a', {href: '/', oncreate: m.route.link}, 'go back')
    ])
  }
}

m.route.prefix('') // reconfig #! 
m.route(document.body, '/', {
  '/': Main,
  '/nextPage': NextPage
})

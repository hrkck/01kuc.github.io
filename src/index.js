const m = require('mithril')

const SearchBox = {
  value: '',
  search: (e) => {
    SearchBox.value = e.target.value
  },
  view: () => {
    return m('p',
        [
          m('input[type="text"][placeholder="search a category"]', {onchange: SearchBox.search}),
          m('p', SearchBox.value)
        ])
  }
}

const Main = {
  view: function(){
    return m('div', [
      m('h1', 'Hello World! made with Mihtril js'),
      m(SearchBox),
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

// m.route.prefix('') // reconfig #!
// const r = 'archetypum.github.io/'
m.route(document.body, '/', {
  '/': Main,
  '/nextPage': NextPage
})

// Currently, entering to a link in the webpage directly,
// makes the page remain in 404.html file. URL is correct but no routing made.

// Still the same.

// Using hash-bang strategy (by default) now. Everything works as expected.

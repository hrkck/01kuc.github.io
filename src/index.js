const m = require('mithril')


let state = {
  searchedTag: '',
  searchTag: (e) => state.searchedTag = e.target.value
}


const SearchBox = {
  view: () =>
    m('p',
      m('input[type="text"][placeholder="search a tag"]', {value: state.searchedTag, onchange: state.searchTag}),
      m('p', 'You are searching this => ' + state.searchedTag))
}


const ExamplePost = {
  oninit: (vnode) => {
    vnode.state.tags = vnode.attrs.tags
    vnode.state.URL = vnode.attrs.URL
  },
  view: (vnode) =>
    m('div',
      m('a', {href: '/', oncreate: m.route.link}, "go back!"),
      m('p', vnode.children),
      m('p', 'Categories: ' + vnode.state.tags),
      m('p', 'And my URL is ' + vnode.state.URL),
      m('a', {href: vnode.state.URL, oncreate: m.route.link}, "click here to navigate me! "),
      m('hr')
    )
}


const Posts = (base, attrs) => {
  let list = []
  let currentPost = undefined
  for(var tags in base){
    currentPost = m(ExamplePost, {tags: tags, URL: attrs[tags]}, base[tags])
    list.push(currentPost)
    routes.addPostRoute(attrs[tags], currentPost)
  }
  return list
}


let t1 = "a,b"
let t2 = "c,a"
let c1 = "First Post"
let c2 = "Second Post"
let url1 = '/firstPost'
let url2 = '/secondPost'


let base = {
  [t1]: c1,
  [t2]: c2
}

let attrs = {
  [t1]: url1,
  [t2]: url2
}


const SearchTag = (targetTag) => {
  //  https://stackoverflow.com/a/39893636
  if(targetTag === '') return undefined
  let targetTags = targetTag.split(',') // split into a list
  let list = []

  for(var originalTags in base){
    if(targetTags.some(targetTag => originalTags.split(',').includes(targetTag))){
      list.push(m(ExamplePost, {tags: originalTags, URL: attrs[originalTags]}, base[originalTags]))
    }
  }
  return list
}


const Main = {
  view: () =>
    m('div',
      m('h1', 'Hello World! made with Mithril js'),
      Posts(base, attrs),
      m('p', 'Seach any tag seperated by a comma, the post will appear below.'),
      m(SearchBox),
      SearchTag(state.searchedTag),
      m('a', {href: '/nextPage/', oncreate: m.route.link}, 'click here to navigate to the next page.')
    )
}


const NextPage = {
  view: () =>
    m('div',
      m('p', 'This is the next page.'),
      m('a', {href: '/', oncreate: m.route.link}, 'go back')
    )
}


const routes = {
  routes: {
    '/': Main,
    '/nextPage': NextPage
  },
  addPostRoute: (key, value) => {
    routes.routes[key] = {view: () => value} // IMPORTANT Detail
    // https://mithril.js.org/route.html
  }
}

// m.route.prefix('') // reconfig #!
// const r = 'archetypum.github.io/'
m.route(document.body, '/', routes.routes)

// Currently, entering to a link in the webpage directly,
// makes the page remain in 404.html file. URL is correct but no routing made.

// Still the same.

// Using hash-bang strategy (by default) now. Everything works as expected.

// Still in the game and kickin'
// https://www.youtube.com/watch?v=ISmgOrhELXs&start_radio=1&list=RDISmgOrhELXs

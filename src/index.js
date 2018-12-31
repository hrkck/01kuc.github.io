const m = require('mithril')

let state = {
  searchedTag: '',
  searchTag: (e) => state.searchedTag = e.target.value
}


const SearchBox = {
  view: () => {
    return m('p',
        [
          m('input[type="text"][placeholder="search a tag"]', {onchange: state.searchTag}),
          m('p', 'You are searching this => ' + state.searchedTag)
        ])
  }
}

const ExamplePost = {
  oninit: (vnode) => {
    vnode.state.tags = vnode.attrs.tags
  },
  view: (vnode) => {
    return m('div', [
      m('p', [
        vnode.children,
        m('span', ', corres. tags => ' + vnode.state.tags)
      ]),
    ])
  }
}


const Posts = (tagsAndContents) => {
  let list = []
  for(var tag in tagsAndContents){
    let content = tagsAndContents[tag]
    list.push(
      m(ExamplePost, {tags: tag}, content)
    )
  }
  return list
}

let t1 = "a,b"
let t2 = "c,a"
let c1 = "First Post"
let c2 = "Second Post"

let base = {
  [t1]: c1,
  [t2]: c2
}

const SearchTag = (targetTag) => {
  if(targetTag === '') return undefined
  let list = []
  for(var tag in base){
    if(tag.includes(targetTag)){
      list.push(m(ExamplePost, {tags: tag}, base[tag]))
    }
  }
  return list
}

const Main = {
  view: function(){
    return m('div', [
      m('h1', 'Hello World! made with Mithril js'),
      Posts(base),
      m('p', 'Seach any tag seperated by a comma, the post will appear below.'),
      m(SearchBox),
      // m(ExamplePost, {tags: state.searchedTag}, base[state.searchedTag]),
      SearchTag(state.searchedTag),
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

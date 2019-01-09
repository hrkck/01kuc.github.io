// ./views/NextPage.js
// A demonstration of basic routing in Mithril JS

const m = require('mithril')

const graph = require('../helpers/renderGraph')
const markdown = require('../helpers/renderMarkdown')
const math = require('../helpers/renderMath')
const code = require('../helpers/renderCode')

let state = require('../models/state')
const routes = require('../models/routes')

const SearchBox = require('./SearchBox')
const PostTemplate = require('./PostTemplate')
// const FeaturesPage = require('../views/FeaturesPage')
const SearchTag = require('../models/SearchTag')
const Posts = require('../models/Posts')


let FeaturesPagePosts = require('../content/FeaturesPagePosts')
let contents = FeaturesPagePosts.contents
let tags = FeaturesPagePosts.tags


const FeaturesPage = {
  view: () =>
    m('div',
      m('p', 'This is the next page.'),
      Posts(contents, tags),
      m('p', 'Seach any tag seperated by a comma, the post will appear below.'),
      m(SearchBox),
      SearchTag(state.searchedTag, contents, tags),
      m('a', {href: '', oncreate: m.route.link}, 'go back')
    )
}


// m.route(document.body, '', routes.routes)

module.exports = FeaturesPage;

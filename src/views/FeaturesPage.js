// ./views/NextPage.js
// A demonstration of basic routing in Mithril JS

const m = require('mithril')

const graph = require('../helpers/renderGraph')
const markdown = require('../helpers/renderMarkdown')
const math = require('../helpers/renderMath')
const code = require('../helpers/renderCode')

let state = require('../models/state')

const SearchBox = require('./SearchBox')
const SearchTag = require('../models/SearchTag')
const Link = require("./Link")
const generatePosts = require('../helpers/generatePosts')


const FeaturesPage = {
  view: () =>
    m('div',
      m(Link, {link: ''}, '<- go back'),
      markdown(`
# This is the Features page

Here you will find a list of posts that demonstrates possible things in this website.
      `),
      generatePosts('FeaturesPage'),
      m('p', 'Seach any tag seperated by a comma, the post will appear below.'),
      m(SearchBox),
      SearchTag(state.searchedTag),
      m(Link, {link: ''}, '<- go back'),
    )
}


module.exports = FeaturesPage;

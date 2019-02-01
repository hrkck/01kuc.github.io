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
    m('div.container.w-75',
      m(Link, {link: ''}, '<- go to the main page'),
      markdown(`
#This is the Features page

Here you will find a list of posts that demonstrates possible types of content in this website.
      `),
      SearchTag('features'),
      m('p', 'Seach any tag seperated by a comma, the post will appear below.'),
      m(Link, {link: ''}, '<- go to the main page')
    )
}


module.exports = FeaturesPage;

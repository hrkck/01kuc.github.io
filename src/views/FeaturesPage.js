// ./views/NextPage.js
// A demonstration of basic routing in Mithril JS

const m = require('mithril')
const markdown = require('../helpers/renderMarkdown')
const SearchTag = require('../models/SearchTag')
const Link = require("./Link")


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

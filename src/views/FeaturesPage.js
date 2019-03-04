// ./views/NextPage.js
// A demonstration of basic routing in Mithril JS

const m = require('mithril') 
const markdown = require('../helpers/renderMarkdown')
const SearchTag = require('../models/SearchTag')
const LayoutPostList = require('./LayoutPostSolo')
const Link = require("./Link")


const FeaturesPage = {
  view: () =>
    m(LayoutPostList, 
      markdown(`
#This is the Features page

Here you will find a list of posts that demonstrates possible types of content in this website.
      `),
      SearchTag('features', false),
      m(Link, {link: ''}, '<- go to the main page')
    )
      
      
}


module.exports = FeaturesPage;

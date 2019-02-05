// ./src/helpers/parseMarkdown
// Parse a markdown file that includes my special functions.
// All the special functions' file names start with 'render' in this folder.

const markdown = require('./renderMarkdown')
const graph = require('./renderGraph')
const code = require('./renderCode')
const math = require('./renderMath')
const html = require('./renderHTML')
const hyperscript = require('./renderHyperscript')


let destringify = (funStr) => Function('markdown, graph, code, math, html, hyperscript', 'return ' + funStr)(markdown, graph, code, math, html, hyperscript)


// content: markdown as string
let parseMarkdown = (content) => {
  let content_parsed = [] // list of markdown and special function pieces as string
  let content_rendered = [] // mithril vnode.children list with markdown and special functions
  content_parsed = content.split(/<<< ([\s\S]*?) >>>/gm)
  for (let i = 0; i < content_parsed.length; i++) {
    if(i % 2 === 0) content_rendered.push(markdown(content_parsed[i])) // if markdown
    if(i % 2 === 1) content_rendered.push(destringify(content_parsed[i])) // if specFun
  }
  return content_rendered
}


module.exports = parseMarkdown
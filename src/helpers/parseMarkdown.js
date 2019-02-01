// ./src/helpers/parseMarkdown
// Parse a markdown file that includes my special functions.
// All the special functions' file names start with 'render' in this folder.

const graph = require('./renderGraph')
const markdown = require('./renderMarkdown')
const math = require('./renderMath')
const code = require('./renderCode')
const html = require('./renderHTML')
const hyperscript = require('./renderHyperscript')


let destringify = (funStr) => {
  return Function('markdown, graph, code, math, html, hyperscript', 'return ' + funStr)(markdown, graph, code, math, html, hyperscript)
}


// content: markdown as string
let parseMarkdown = function (content) {
  let content_parsed = [] // list of markdown and special function pieces as string
  let content_rendered = [] // mithril vnode.children list with markdown and special functions
  content_parsed = content.split(/escape ([\s\S]*?) end/gm)
  for (let i = 0; i < content_parsed.length; i++) {
    if(i % 2 === 0) content_rendered.push(markdown(content_parsed[i])) // if markdown
    if(i % 2 === 1) content_rendered.push(destringify(content_parsed[i])) // if specFun
  }
  return content_rendered

  // Below is step by step development of this beautiful function... will be deleted on the next commit...
  // search for special functions
  // let specFun = content.match(/escape ([\s\S]*?) end/gm)
  // if (specFun != null) {
    // content_parsed = content.split(/escape ([\s\S]*?) end/gm)
    // for (let i = 0; i < content_parsed.length; i++) {
    //   if(i % 2 === 0){ // if markdown
    //     const md_piece = content_parsed[i];
    //     content_rendered.push(markdown(md_piece))
    //   }else if(i % 2 === 1){ // if specFun
    //     const specFun_piece = content_parsed[i];
    //     content_rendered.push(destringify(specFun_piece))
    //   }      
    // }
    // https://media.tenor.co/images/7f6402cf7df54cdf24505ee7895326aa/raw ....

    // console.log(content_parsed)

    // console.log(content_parsed)


    // remove preceding `escape ` and following ` end`
    // specFun = specFun.map(fun => /escape ([\s\S]*?) end/gm.exec(fun)[1])
    // specFun = destringify(specFun)
    // https://media.tenor.co/images/7f6402cf7df54cdf24505ee7895326aa/raw ....
    // TODO -> replace the appropriate special function in the place of removed regex match group... 

    // content_parsed = content.replace(/escape ([\s\S]*?) end/gm, '')
    // content_rendered = [markdown(content_parsed), ...specFun]
    // content_rendered = [content_parsed.map(markdown), ...specFun]
  // } else {
    // content_rendered = markdown(content)
  // }
  // content_parsed = content.split(/escape ([\s\S]*?) end/gm)
  // for (let i = 0; i < content_parsed.length; i++) {
  //   if(i % 2 === 0){ // if markdown
  //     const md_piece = content_parsed[i];
  //     console.log(md_piece)
  //     content_rendered.push(markdown(md_piece))
  //   }else if(i % 2 === 1){ // if specFun
  //     const specFun_piece = content_parsed[i];
  //     content_rendered.push(destringify(specFun_piece))
  //   }      
  // }
  // return content_rendered
}


module.exports = parseMarkdown
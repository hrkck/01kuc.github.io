// ./content/AllPosts.js
// An envisioned js file to keep all the posts.

// Example:
// const Posts = {
// ['base-url']: {
//   ['url']: {
//     title: 'title',
//     tags: 't,a,g,s',
//     content: 'content'
//   },
//  ...,
// },
//  ['another-baseurl']:{
//  ...,
//  ...,
//   },
//  }
// }


const m = require('mithril')
const graph = require('../helpers/renderGraph')
const markdown = require('../helpers/renderMarkdown')
const math = require('../helpers/renderMath')
const code = require('../helpers/renderCode')


// Post(url, title, tags, content),
// white space &nbsp;
const AllPosts = {
  ['FeaturesPage']: {
    ['firstPost']: {
      title: 'First Post',
      tags: 'a,b,first-post',
      content: markdown(`
This is the first Post! It used to look more primitive ... :))
        `)
    },
    ['secondPost']: {
      title: 'Second Post',
      tags: 'c,a,secondPost',
      content: markdown(`
# Hello Markdown

sample markdown.

## Second Heading

* Unordered lists, and:
1. One
1. Two
1. Three
* More

>>> -Blockquote

And &nbsp; **bold**, &nbsp;*italics*, and even &nbsp;*italics and later &nbsp;**bold***. &nbsp;[A link](https://markdowntohtml.com)&nbsp; to somewhere.


or an image made in blender...

![Colibri](https://archive.blender.org/typo3temp/pics/bee472a01f.jpg)
`)
    },
    ['katex-example']: {
      title: 'KaTeX Example',
      tags: 'katex,math',
      content: m('p', 'math inline ', math('i = oo'), ' and math block, ', m('div', math('sum_(i=1)^n i^3=((n(n+1))/2)^2')))
    },
    ['plot-example']: {
      title: 'Plotting a function',
      tags: 'plot-example',
      content: m('div',
        markdown(`Below is a list of functions plotted.
        The code that render it is simple:`),
        code('inline', `graph(10, 2, 'x', '-x+10', '1/10*x**2', 'x**3', 'Math.sin(x)', 'Math.cos(x)', '-x', '-5', '-7')`),
        graph(10, 2, 'x', '-x+10', '1/10*x**2', 'x**3', 'Math.sin(x)', 'Math.cos(x)', '-x', '-5', '-7')
      )
    },
    ['code-highlight']: {
      title: 'Higlighting a piece of code with microlight.js',
      tags: 'code,javascript,highlight',
      content: m('div',
        code('block',
`['code-highlight']: {
  title: 'Higlighting a piece of code with microlight.js',
  tags: 'code,javascript,highlight',
  content: m('div',
    code('block', this very code),
    m('p', 'here is an inline code ',
      code('inline',
        \`console.log('That is the way it is done!')\`
      ),
      ' snippet'
  ))
}`
        ),
        m('p', 'here is an inline code ',
          code('inline',
            `console.log('That is the way it is done!')`
          ),
          ' snippet'
      ))
    }
  }
}

module.exports = AllPosts

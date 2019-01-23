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



// let calcTime = 


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
  },
  ['Blender3D']: {
    ['blender-tutorials-index']:{
      title: "A collection of Blender 3D tutorials",
      tags: 'blender,3d,tutorials,collections',
      content: markdown(
        `
It is always good to keep a collection of bookmarks in a safe place.

This post can be used as a note taking place to keep a memory on the good resources on Blender 3D.

- An archived list of &nbsp; [blender user communities](https://archive.blender.org/community/user-community/index.html). This list may be outdated but most of the forums are still active today.
- [API Blender 2.64](https://docs.blender.org/api/blender_python_api_2_64_release/). It may seem to be not relevant anymore, but it includes important timeless practices.
- [API Blender 2.59](https://docs.blender.org/api/blender_python_api_2_59_release/)
- [API Blender 2.49](https://archive.blender.org/documentation/249PythonDoc.html)
- [API Blender 2.79](https://docs.blender.org/api/2.79b/)
- [Blender 2.6 Code Documentation](https://en.blender.org/index.php/Dev:Source/Architecture)
- [Current Code Documentation (2.8)](https://wiki.blender.org/wiki/Main_Page)
- [Blender SVN](https://svn.blender.org/svnroot/bf-blender/)
- [Blender Demo Page.](https://download.blender.org/demo/). An interesting place.
- [Blender.org tutorials page (archive)](https://archive.blender.org/education-help/tutorials/index.html)
- [Official Blender YoutubeChannel](https://www.youtube.com/user/BlenderFoundation)
- [Modern Blender Docs](https://docs.blender.org/)
- [Blender 2.6 Docs](https://en.blender.org/index.php/Doc:2.6/Tutorials), this page is one of the inconsumable and invaluable source of information.
- [Blender 2.6 Manuals](https://en.blender.org/index.php/Doc:2.6/Manual)
- [A parent page for the above two links](https://en.blender.org/index.php/Doc:2.6)
- [Blender noob to pro](https://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro), lets admit, after using blender for 8 years, I am still a noob. Lets check that book out finally for gods' sake!
- [Blender nation's tuts section](https://www.blendernation.com/category/education/tutorials/)
- Some [nostalgic page](http://wiki.c2.com/?BlenderWiki) about blender 
- [reddit's blender wiki page](https://www.reddit.com/r/blender/wiki/index). This is a similar place to this page.
- [a nice blender sculpting related youtube channel](https://www.youtube.com/channel/UCfjswDVU0XHyBN7UFG0Mi5Q)
- [Armory 3D, Blender Game Engine](https://armory3d.org/)

- [some misc content](http://www.cdschools.org/Page/455) -> check that website out but there is not much time to waste
- [bio blender](http://www.bioblender.org/), molecular viz in blender.
- [making clouds in blender](https://blenderartists.org/t/procedural-cloudscape-generation-in-cycles-now-eevee/694700)
- [BlenderHD.com](https://www.blenderhd.com/tutorials/)
- [CreativeSchrimp](https://www.creativeshrimp.com/tutorials)
- [BlenderTuts](https://www.blendtuts.com/)
- [A fun place to practice Blender](http://www.littlewebhut.com/blender/)
- [Animation related tutorials](https://conceptartempire.com/blender-animation-tutorials/)
- [Zacharias's](https://zachariasreinhardt.com/)
- [CG meetup blender tutorials](http://www.cgmeetup.net/home/tutorials/blender/)
- [borncg youtube channel](https://www.youtube.com/channel/UCdioEctcBLd2nw2aQkl8msw)
- [katbits](https://www.katsbits.com/tutorials/)
- [blender geo map creaing](https://somethingaboutmaps.wordpress.com/blender-relief-tutorial-the-plane/)


      `
      )
    }
  },
  ['other']: {
    ['a-year-clock']:{
      title: '',
      tags: 'tommy,niko,jasmin,hakki,year,clock',
      content: m('div', 
          markdown(
`
here is an idea that struck to Niko on an evening of January... :
`
          ),
          m('img.a-year-clock', {
            src: './src/content/media/other/a-year-clock/tommy-niko-jasmin-hakki.png', 
            alt: 'tommy-niko-jasmin-hakki',
            //https://stackoverflow.com/a/51817813/6025059
            oncreate: (vnode)=>{ // use vnode not 'e'!!! AND USE ONLY MITHRILS LIFECYCLES METHODS!
              let inception = new Date('January 17, 2019 22:10:00');
              let now = new Date();
              let deg = (360/365) * Math.floor((now-inception)/(1000*60*60*24)); // convert miliseconds to degrees
              vnode.dom.setAttribute("style", "transform: rotate(" + deg + "deg)");
            }
          }),
          markdown(
`
This picture will rotate clock-wise by .986 degree a day. For instance, in 365 days, it will appear without any orientation. As the picture rotates, each person will tell a date. Therefore, since the picture is taken on 17 January, Tommy corresponds to Winter, I to Spring, Jasmin to Summer and Niko to Autumn.


`         ),
          markdown(`A simple \`new Date()\` output controls rotation of the image and that does the js trick.`),  
          code('block',
`
oncreate: (vnode)=>{ // use vnode not 'e'!!! AND USE ONLY MITHRILS LIFECYCLES METHODS!
  let inception = new Date('January 17, 2019 22:10:00');
  let now = new Date();
  let deg = (360/365) * Math.floor((now-inception)/(1000*60*60*24)); // convert miliseconds to degrees
  vnode.dom.setAttribute("style", "transform: rotate(" + deg + "deg)");
}
`)
        )
    }
  }
  // ['some-parent-url']: {
  //   ['post-url']: {
  //     title: '',
  //     tags: '',
  //     contents: ''
  //   }
  // }
}

module.exports = AllPosts

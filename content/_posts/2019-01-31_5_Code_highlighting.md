---
title: Code highlighting
tags: code highlighting,microlight,features
url: microlight_example
baseUrl: FeaturesPage
date: 2019-01-31
---
To highlight code, I use [microlight](http://asvd.github.io/microlight/), Galaxy's simplest code highlighter.

<<< code(`function readFile(file){
  let isFileRead = false
  let md_file = ''
  while(!isFileRead){ // I don't know why, \`on change\` the file is not always read the first time...
    md_file = fs.readFileSync(file, 'utf8')
    if(md_file == ''){
      console.log(" ----------FILE NOT READ----------- ")
      continue
    }else{
      console.log(' +++++++FILE READ+++++++++ ')
      isFileRead = true
    }
  }
  return md_file
}
`) >>>

Rendering an inline code is also quite straight forward, `(e)=>{console.log(e.target.value)}` will do it...

The end. Puummm.

If you have read it so far, you are a weird person. [Here are](https://media.giphy.com/media/9jDrxxBuV3TDW/giphy.gif) some potatos for you.


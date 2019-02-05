const fs = require('fs')

const PATH = 'content/_posts' // when I use `fs` commands, path is relative to where `node` command is run
const READFILE = '../../content/all_posts.js' // when I require, path is relative to this file.
const WRITEFILE = 'content/all_posts.js'

let current = require(READFILE)

function readDir(dir){
  let md_files = []
  fs.readdirSync(dir).forEach(file=>{
    md_files.push(String(dir + '/' + file))
  })
  console.log("md files: ", md_files)
  return md_files
}
function readFile(file){
  let isFileRead = false
  let md_file = ''
  while(!isFileRead){ // I don't know why, `on change` the file is not always read the first time...
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
function parsePost(md_file){
  let [front_matter, body] = md_file.replace('---\n', '').split('\n---\n')
  let post = {markdown: body}
  front_matter.split('\n').forEach(line => {
    let [key, val] = line.split(/: (.+)/)
    post[key] = val
  })
  console.log("generated post: " + JSON.stringify(post))
  return post
}
function writePosts(posts){
  console.log('current:', current)
  let updated = uniqePosts(current.concat(posts))
  current = updated
  console.log('updated:', updated)
  fs.writeFileSync(WRITEFILE, "module.exports = " + JSON.stringify(updated))
}
function uniqePosts(array) {
  // https://stackoverflow.com/a/1584377/6025059
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
        // when an update comes, i represent the old version, j the new.
        // when this is detected, remove i, so only j is left, the new version...
        console.log('INSIDE ARRAYUNIQUE: ', a[i])
        if(a[i] == undefined){
          break
        }
        if(a[i]['url'] === a[j]['url']) a.splice(i--, 1);
              // console.log(i)
      }
  }
  return a;
}

let posts = readDir(PATH).map(readFile).map(parsePost)
writePosts(posts)

let counter = 0
if (process.argv.includes('--watch')){
    const chokidar = require('chokidar');
    let watcher = chokidar.watch(PATH)

    watcher.on('change', path => {
      console.log(counter++, ` File ${path} has been changed.`)
      let updatedPost = parsePost(readFile(path))
      writePosts([updatedPost])
    })

    watcher.on('add', path => {
      console.log(counter++, ` File ${path} has been added.`)
      let newPost = parsePost(readFile(path))
      writePosts([newPost])
    })
}
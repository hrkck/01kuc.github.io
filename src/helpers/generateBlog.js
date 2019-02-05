const fs = require('fs')

const PATH = 'content/_posts' // when I use `fs` commands, path is relative to where `node` command is run
const READFILE = '../../content/all_posts.js' // when I require, path is relative to this file.
const WRITEFILE = 'content/all_posts.js'

let current = require(READFILE)

readDir = (dir) => fs.readdirSync(dir).map(file=>String(dir + '/' + file))

readFile = (file) => fs.readFileSync(file, 'utf8')

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

writePosts = (posts) => fs.writeFileSync(WRITEFILE, "module.exports = " + JSON.stringify(uniqePosts(current.concat(posts))))


function uniqePosts(array) {
  // https://stackoverflow.com/a/1584377/6025059
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
        // when an update comes, i represent the old version, j the new.
        // when this is detected, remove i, so only j is left, the new version...
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


if (process.argv.includes('--watch')){
    const chokidar = require('chokidar');
    let watcher = chokidar.watch(PATH)

    watcher.on('change', path => {writePosts([parsePost(readFile(path))])})
    watcher.on('add', path => {writePosts([parsePost(readFile(path))])})
}
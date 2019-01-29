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
const LayoutPostSolo = require('./LayoutPostSolo')
const generatePosts = require('../helpers/generatePosts')


// This is a closure!
const CreatePost = () => {

    let front_matter = '---\ntitle: \ntags: \nurl: \ndate: \n---\n'
    let content = ''
    let rendered = ''

    parseFrontMatter = function (e) {
        front_matter = e.target.value
    }
    parseContent = function (e) {
        content = e.target.value
        rendered = markdown(content)
    }


    // https://stackoverflow.com/a/45831280/6025059
    download = function(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }

    downloadFile = function(){
        let filename = 'create-post'
        let text = front_matter + content

        download(filename, text)
    }



    return{
        view: () =>
            m(LayoutPostSolo,
                m('div.container[style=""]',
                    m('textarea[name=front-matter][style="width:360px"][rows=7]', {oninput: parseFrontMatter, value: front_matter}),
                    m('br'),
                    m('div.container.row',
                        m('textarea[name="post-content"][style="width: 360px;min-height: 70vh;"]', {oninput: parseContent}),
                        m('div.col', 'render here',
                            m('p', rendered)
                        )
                    ),
                    m('input[type=button][value="Download this file"]', {onclick: downloadFile}, '')
                ))
    }
}



module.exports = CreatePost;

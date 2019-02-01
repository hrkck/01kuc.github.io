// ./views/CreatePost.js
// The page to create posts

// references
// https://stackoverflow.com/questions/45831191/generate-and-download-file-from-js

const m = require('mithril')

const parseMarkdown = require('../helpers/parseMarkdown')
const LayoutPostSolo = require('./LayoutPostSolo')


// This is a closure! //  https://how-to-mithril.js.org/#!/ -> simple closure comp
const CreatePost = () => {

	let now = new Date().toJSON().substring(0, 10)

	let isButtonDisabled = true

	let front_matter = (parsed)=>'---\ntitle: ' + parsed['title'] +  '\ntags: ' + parsed['tags'] +  '\nurl: ' + parsed['url'] +  '\nbaseUrl: ' + parsed['baseUrl'] +  '\ndate: ' + now + '\n---\n'
	let front_matter_parsed = {'title': '', 'tags': '', 'url': '', 'baseUrl': '', 'date': now} // for files 
	let content = localStorage['postContent'] || "Please don't \`XSS\` me! But if you do, tell me how..."
	let content_rendered = ''


	let specFuncNames = ['code','graph','math','html','hyperscript','markdown',]
	addSpecFun = function(e) {
		const specFun = e.target.value.split(' ')[1]
		console.log(specFun)

		content += '\nescape '

		if(specFun === 'code') content += specFun+'(`block`, `code_highlight`)'
		else if(specFun === 'graph') content += specFun+'(10, 2, `x`)'
		else if(specFun === 'math') content += specFun+'(`block`, `f(x) = y`)'
		else if(specFun === 'html') content += specFun+'(`<p>html</p>`)'
		else if(specFun === 'hyperscript') content += specFun+'(`m(\'p\',\'hyperscript\')`)'
		else if(specFun === 'markdown') content += specFun+'(`####markdown`)'
		
		content += ' end\n\\n'

	}

	parseFrontMatter = function (e) {
		const matter = e.target.name
		front_matter_parsed[matter] = e.target.value
		console.log(e.target.name)
		// front_matter = e.target.value
		// let top = (front_matter.replace('---\n', '').split('\n---\n'))[0] // clean from dashes
		// top.split('\n').forEach(line => {
		// 	var [key, value] = line.split(/: /) // seperate by `: `
		// 	front_matter_parsed[key] = value
		// })

		console.log(front_matter_parsed)
		console.log(front_matter(front_matter_parsed))
		if(front_matter_parsed['title'] !== '') isButtonDisabled = false
		else isButtonDisabled = true
	}
	parseContent = function (e) {
		content = e.target.value
		localStorage['postContent'] = content

		content_rendered = parseMarkdown(content)
	}


	// https://stackoverflow.com/a/45831280/6025059
	download = function (filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}

	downloadFile = function () {
		let filename = front_matter_parsed['date'] + '_' + front_matter_parsed['title'] + ".md"
		console.log(filename)
		let text = front_matter(front_matter_parsed) + content

		download(filename, text)
	}


	return {
		view: () =>
			m(LayoutPostSolo, {baseUrl: ''},
				m('div.container[style=""]',
					m('form',
						m('div',
							m('div', m('hr'), m('h3', 'Front Matter'), m('p', '---')),
							m('div', 'title: ', m('input[type="text"][name="title"]', { oninput: parseFrontMatter})),
							m('div', 'tags: ', m('input[type="text"][name="tags"]', { oninput: parseFrontMatter})),
							m('div', 'url: ', m('input[type="text"][name="url"]', { oninput: parseFrontMatter})),
							m('div', 'baseUrl: ', m('input[type="text"][name="baseUrl"]', { oninput: parseFrontMatter})),
							m('div', 'date: ', m('input[type="text"][name="date"]', { oninput: parseFrontMatter, value: now})),
							m('div', m('p', '---'), m('hr'), m('br')),
						),
						m('h3','Content'),
						m('p','It is updated on input or on mouse over ;)'),
						m('div.container.row',
							specFuncNames.map(name=>m('input[type="button"]', {value: 'render '+name, onclick: addSpecFun},)),
						),
						m('input[type=button][value="Download this file"]', { onclick: downloadFile, disabled: isButtonDisabled }, ''),
						m('div.container.row',
							m('textarea.col-6[name="post-content"][style="min-height:70vh;"]', { oninput: parseContent, onmouseover: parseContent, value: content}),
							m('div.col-6.word-wrap', content_rendered)
						)
					)
				)
			)
	}
}



module.exports = CreatePost;

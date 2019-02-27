// ./views/CreatePost.js
// The page to create posts

// references
// https://stackoverflow.com/questions/45831191/generate-and-download-file-from-js

const m = require('mithril')

const parseMarkdown = require('../helpers/parseMarkdown')
const Link = require('./Link')
const htmlToHyperscript = require('../helpers/htmlToHyperscript')
const hyperscript = require('../helpers/renderHyperscript')


// This is a closure! //  https://how-to-mithril.js.org/#!/ -> simple closure comp
const CreatePost = () => {
	let now = new Date().toJSON().substring(0, 10)
	let isButtonDisabled = true

	let front_matter_parsed = { 'title': '', 'tags': '', 'url': '', 'baseUrl': '', 'date': now }
	let content = localStorage['postContent'] || "Start typing your post here!"
	let content_rendered = ''

	let rawHTML = ''
	let convertedHyperscript = ''
	let convertedHyperscript_rendered = ''

	let specFuncs = ['code', 'graph', 'math-block', 'math-inline', 'html', 'hyperscript', 'markdown', 'image', 'link']
	let specSnips = ['definition', 'theorem']

	addSpecFun = function (specFun) {
		let head = '\n <<< '
		let tail = ' >>> \n'
		if (specFun === specFuncs[0]) content += head + specFun + '(`code_highlight`)' + tail
		if (specFun === specFuncs[1]) content += head + specFun + '(10, 2, `x`)' + tail
		if (specFun === specFuncs[2]) content += head + specFun.split('-')[0] + '(`f(x) = y`)' + tail
		if (specFun === specFuncs[3]) content += head + `hyperscript(\`m('p',	
		'an inline math expression, ', 
		math('i = oo'), 
		' more inline text ', 
		)\`)` + tail
		if (specFun === specFuncs[4]) content += head + specFun + '(`<p>html</p>`)' + tail
		if (specFun === specFuncs[5]) content += head + specFun + '(`m(\'p\',\'hyperscript\')`)' + tail
		if (specFun === specFuncs[6]) content += head + specFun + '(`####markdown`)' + tail
		if (specFun === specFuncs[7]) content += '\n ![image](url) \n'
		if (specFun === specFuncs[8]) content += '\n [link](https://duckduckgo.com) \n'
		if (specFun === specSnips[0]) content += head + `hyperscript(\`m('div.container.text-white.border.border-primary.p-0', 
		m('div.col-12.bg-primary', 
		math('text(Definition 1.1.1: Definition)')),
		m('div.bg-white.col-12.text-body.text-center', 
		math('i = oo'))
		)\`)` + tail
		if (specFun === specSnips[1]) content += head + `hyperscript(\`m('div.container.text-white.border.border-warning.p-0', 
		m('div.col-12.bg-warning', 
		math('text(Sätze 1.1.1: Sätze)')),
		m('div.bg-white.col-12.text-body.text-center', 
		math('i = oo'))
		)\`)` + tail
		parseContent(content)
	}

	parseFrontMatter = function (name, value) {
		const matter = name
		front_matter_parsed[matter] = value
		localStorage[name] = value
		if (front_matter_parsed['title'] !== '') isButtonDisabled = false
		else isButtonDisabled = true
	}
	parseContent = function (value) {
		content = value
		localStorage['postContent'] = value
		content_rendered = parseMarkdown(value)
	}

	convertHTML = function (value) {
		rawHTML = value
		convertedHyperscript = htmlToHyperscript({ source: rawHTML, indent: '2' })
		renderConvertedHTML(convertedHyperscript)
	}

	renderConvertedHTML = function (hyperscr){
		convertedHyperscript = hyperscr
		convertedHyperscript_rendered = hyperscript(convertedHyperscript)
	}

	// https://stackoverflow.com/a/45831280/6025059
	download = function (filename, text) {
		var element = document.createElement('a')
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
		element.setAttribute('download', filename)
		element.style.display = 'none'
		document.body.appendChild(element)
		element.click()
		document.body.removeChild(element)
	}

	front_matter = function (parsed) {
		return '---\ntitle: ' + parsed['title'] + '\ntags: ' + parsed['tags'] + '\nurl: ' + parsed['url'] + '\nbaseUrl: ' + parsed['baseUrl'] + '\ndate: ' + now + '\n---\n' // for files 
	}

	downloadFile = function () {
		let filename = front_matter_parsed['date'] + '_' + front_matter_parsed['title'].replace(/\s/g, '_') + ".md"
		let text = front_matter(front_matter_parsed) + content
		download(filename, text)
	}
	
	frontMatterInput = (labelFor, label, name, placeholder, type, value) =>
		m(".form-group.row",
			m("label.col-sm-2.col-form-label.col-form-label-sm", { for: labelFor }, label),
			m(".col-sm-10",
				m("input.form-control.form-control-sm", { id: labelFor, name: name, placeholder: placeholder, type: type, value: value, oninput: (e) => { parseFrontMatter(e.target.name, e.target.value) } }))
		)


	return {
		view: (vnode) =>
			m('div.container-fluid',
				m('div.container',
					m(Link, {link: ''}, '<- go back '),
					m("form",
						m('div', 
							m('hr'), 
							m('h3', 'Front Matter'), 
							m('p', '---')
						),
						frontMatterInput('frontMatterTitle', 'Title', 'title', 'enter a title', 'text', localStorage['title']),
						frontMatterInput('frontMatterTags', 'Tags', 'tags', 'enter comma seperated tags', 'text', localStorage['tags']),
						frontMatterInput('frontMatterURL', 'URL', 'url', 'enter a URL without slash', 'text', localStorage['url']),
						frontMatterInput('frontMatterBaseURL', 'BaseURL', 'baseUrl', 'enter a base URL without slash', 'text', localStorage['baseUrl']),
						frontMatterInput('frontMatterDate', 'Date', 'date', 'date is fed automatically', 'date', now), 
						m('p', '---'),
						m('hr'), m('br')
					),

					m('div',
						m('h3', 'Content'),
						m('div.container-fluid.row.btn-group.m-0.p-0',
							specFuncs.map(specFun => m('input.btn.btn-primary[type="button"]', { value: 'render ' + specFun, onclick: () => { addSpecFun(specFun) } })),
							specSnips.map(specSnip => m('input.btn.btn-info[type="button"]', { value: 'add ' + specSnip, onclick: () => { addSpecFun(specSnip) } })),
						),
						m('div.container-fluid.row.btn-group.mt-1.mb-1.m-0.p-0',
							m('input.btn.btn-success[type=button][value="Download this file"]', { onclick: downloadFile, disabled: isButtonDisabled }, ''),
						),
						m('div.container-fluid.row.m-0.p-0',
							m('div.col-md-12.col-lg-6.p-0',
								m('p', 'Enter the post:'),
								m('textarea.col-12[name="post-content"][style="min-height:70vh;"]', { oninput: (e) => { parseContent(e.target.value) }, onmouseover: (e) => { parseContent(e.target.value) }, value: content }),
							),
							m('div.col-md-12.col-lg-6.p-0',
								m('p', 'See the result:'),
								m('div.col-12.border.border-info[style="min-height:70vh;max-height:70vh;overflow-y: scroll;"]', content_rendered)
							)
						),
						m('hr'),
					),
					
					m('div',
						m('h3', 'HTML to Hyperscript converter'),
						m('.container-fluid.row.m-0.p-0',
							m('div.col-sm-12.col-md-6.col-lg-4.p-0',
								m('p', 'Enter HTML:'),
								m('textarea.col-12[name="rawHTML-area"][style="min-height:70vh;"]', { oninput: (e) => { convertHTML(e.target.value) }, value: rawHTML }),
							),
							m('div.col-sm-12.col-md-6.col-lg-4.p-0',
								m('p', 'See and edit Hyperscipt further:'),
								m('textarea.col-12.word-wrap.border.border-info[style="min-height:70vh;max-height:70vh;overflow-y: scroll;"]', { style: { 'white-space': 'pre' }, oninput: (e) => { renderConvertedHTML(e.target.value) }, value: convertedHyperscript }), 
								m('div.mt-1.mb-5')
							),
							m('div.col-md-12.col-lg-4.p-0',
								m('p', 'See the rendered hyperscript:'),
								m('div.col-12.word-wrap.border.border-info[style="min-height:70vh;max-height:70vh;overflow-y: scroll;"]', convertedHyperscript_rendered),
								m('div.mt-1.mb-5')
							)
						)
					),
					m('hr'), m('br')
				)
			)
	}
}


module.exports = CreatePost;

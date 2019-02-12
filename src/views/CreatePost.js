// ./views/CreatePost.js
// The page to create posts

// references
// https://stackoverflow.com/questions/45831191/generate-and-download-file-from-js

const m = require('mithril')

const parseMarkdown = require('../helpers/parseMarkdown')
const LayoutPostSolo = require('./LayoutPostSolo')
const htmlToHyperscript = require('../helpers/htmlToHyperscript')


// This is a closure! //  https://how-to-mithril.js.org/#!/ -> simple closure comp
const CreatePost = () => {
	let now = new Date().toJSON().substring(0, 10)
	let isButtonDisabled = true

	let front_matter = (parsed) => '---\ntitle: ' + parsed['title'] + '\ntags: ' + parsed['tags'] + '\nurl: ' + parsed['url'] + '\nbaseUrl: ' + parsed['baseUrl'] + '\ndate: ' + now + '\n---\n' // for files 
	let front_matter_parsed = { 'title': '', 'tags': '', 'url': '', 'baseUrl': '', 'date': now }
	let content = localStorage['postContent'] || "Please don't \`XSS\` me! But if you do, tell me how..."
	let content_rendered = ''

	let rawHTML = ''
	let convertedHyperscript = ''


	let specFuncNames = ['code', 'graph', 'math-block', 'math-inline', 'html', 'hyperscript', 'markdown', 'image', 'link']
	addSpecFun = function (e) {
		const specFun = e.target.value.split(' ')[1]
		console.log(specFun)

		let head = '\n<<< '
		let tail = ' >>> \n \n'

		if (specFun === 'code') content += head + specFun + '(`block`, `code_highlight`)' + tail
		else if (specFun === 'graph') content += head + specFun + '(10, 2, `x`)' + tail
		else if (specFun === 'math-block') content += head + specFun.split('-')[0] + '(`f(x) = y`)' + tail
		else if (specFun === 'math-inline') content += head + `hyperscript(\`m('p',	
		'an inline math expression, ', 
		math('i = oo'), 
		' more inline text ', 
		)\`)` + tail
		else if (specFun === 'html') content += head + specFun + '(`<p>html</p>`)' + tail
		else if (specFun === 'hyperscript') content += head + specFun + '(`m(\'p\',\'hyperscript\')`)' + tail
		else if (specFun === 'markdown') content += head + specFun + '(`####markdown`)' + tail
		else if (specFun === 'image') content += '\n ![image](url) \n'
		else if (specFun === 'link') content += '\n [link](https://duckduckgo.com) \n'


	}

	parseFrontMatter = function (e) {
		const matter = e.target.name
		front_matter_parsed[matter] = e.target.value
		if (front_matter_parsed['title'] !== '') isButtonDisabled = false
		else isButtonDisabled = true
	}
	parseContent = function (e) {
		content = e.target.value
		localStorage['postContent'] = content
		content_rendered = parseMarkdown(content)
	}

	convertHTML = function (e) {
		rawHTML = e.target.value
		convertedHyperscript = htmlToHyperscript({ source: rawHTML, indent: '2' })
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
	downloadFile = function () {
		let filename = front_matter_parsed['date'] + '_' + front_matter_parsed['title'] + ".md"
		let text = front_matter(front_matter_parsed) + content
		download(filename, text)
	}


	return {
		view: () =>
			m(LayoutPostSolo, { baseUrl: '' },
				m('div.container',
					m("form",
						m('div', m('hr'), m('h3', 'Front Matter'), m('p', '---')),
						m(".form-group.row",
							m("label.col-sm-2.col-form-label.col-form-label-sm[for='frontMatterTitle']", "Title"),
							m(".col-sm-10",
								m("input.form-control.form-control-sm[id='frontMatterTitle'][name='title'][placeholder='enter a title'][type='text']", { oninput: parseFrontMatter }))
						),
						m(".form-group.row",
							m("label.col-sm-2.col-form-label.col-form-label-sm[for='frontMatterTags']", "Tags"),
							m(".col-sm-10",
								m("input.form-control.form-control-sm[id='frontMatterTags'][name='tags'][placeholder='enter comma seperated tags'][type='text']", { oninput: parseFrontMatter }))
						),
						m(".form-group.row",
							m("label.col-sm-2.col-form-label.col-form-label-sm[for='frontMatterURL']", "URL"),
							m(".col-sm-10",
								m("input.form-control.form-control-sm[id='frontMatterURL'][name='url'][placeholder='enter a URL without slash'][type='text']", { oninput: parseFrontMatter }))
						),
						m(".form-group.row",
							m("label.col-sm-2.col-form-label.col-form-label-sm[for='frontMatterBaseURL']", "BaseURL"),
							m(".col-sm-10",
								m("input.form-control.form-control-sm[id='frontMatterBaseURL'][name='baseUrl'][placeholder='enter a base URL without slash'][type='text']", { oninput: parseFrontMatter }))
						),
						m(".form-group.row",
							m("label.col-sm-2.col-form-label.col-form-label-sm[for='frontMatterDate']", "Date"),
							m(".col-sm-10",
								m("input.form-control.form-control-sm[id='frontMatterDate'][name='date'][placeholder='date is fed automatically'][type='date']", { oninput: parseFrontMatter, value: now }))
						),
						m('div', m('p', '---'), m('hr'), m('br')),
					),

					m('div',
						m('h3', 'Content'),
						m('p', 'It is updated on input or on mouse over ;)'),
					),

					m('div.container.row.btn-group',
						specFuncNames.map(name => m('input.btn.btn-primary[type="button"]', { value: 'render ' + name, onclick: addSpecFun })),
					),

					m('div.container.row.btn-group.mt-1.mb-1',
						m('input.btn.btn-success[type=button][value="Download this file"]', { onclick: downloadFile, disabled: isButtonDisabled }, ''),
					),

					m('div.container.row',
						m('div.col-md-12.col-lg-6.p-0',
							m('p', 'Enter the post:'),
							m('textarea.col-12[name="post-content"][style="min-height:70vh;"]', { oninput: parseContent, onmouseover: parseContent, value: content }),
							m('div.mt-1.mb-5',
								m('input.form.control.btn.btn-danger[type=button][value="Delete content"][aria-describedby="deleteContent"]', { onclick: () => { content = '' } }, ''),
								m("small.form-text.text-muted[id='deleteContent']", "(ctrl+z is not gonna bring it back!)"),
							),
						),
						m('div.col-md-12.col-lg-6.p-0',
							m('p', 'See the result:'),
							m('div.col-12.word-wrap.border.border-info[style="min-height:70vh;max-height:70vh;overflow-y: scroll;"]', content_rendered)
						)
					),

					m('.mt-5.mb-5'),


					m('div',
						m('h3', 'HTML to Hyperscript converter'),
						m('p', 'This is particularly useful when combined with the tools above, it allows to quickly prototype a page.'),
					),

					m('div.container.row',
						m('div.col-md-12.col-lg-6.p-0',
							m('p', 'Enter HTML:'),
							m('textarea.col-12[name="rawHTML-area"][style="min-height:70vh;"]', { oninput: convertHTML, value: rawHTML }),
							m('div.mt-1.mb-5',
								m('input.form.control.btn.btn-danger[type=button][value="Delete content"][aria-describedby="deleteRawHTML"]', { onclick: () => { rawHTML = '' } }, ''),
								m("small.form-text.text-muted[id='deleteRawHTML']", "(ctrl+z is not gonna bring it back!)"),
							),
						),
						m('div.col-md-12.col-lg-6.p-0',
							m('p', 'See and edit Hyperscipt further:'),
							m('textarea.col-12.word-wrap.border.border-info[style="min-height:70vh;max-height:70vh;overflow-y: scroll;"]', { style: { 'white-space': 'pre' } }, convertedHyperscript)
						)
					),
					m('hr'), m('br')
				)
			)
	}
}


module.exports = CreatePost;

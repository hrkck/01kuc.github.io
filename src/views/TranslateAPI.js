// ./views/TranslateAPI.js
// The page to translate words

const m = require('mithril')



const TranslateAPI = () => {
  let KEY = "trnsl.1.1.20180724T121917Z.f86593e821feea59.2382b7446bfa437a2a2d70fa363fcf14824c361c"
  let URL_JSON = "https://translate.yandex.net/api/v1.5/tr.json/translate"

  let typingTimer // typing identifier

  let source, translated = ''
  let sourceView, translationsView = m('span', '')

  let table = []
  let tableLocalStorage = localStorage.getItem('table')
  // 'table' can be null, '[]' or an array of m()'s in a 
  isLocalStorageNull = tableLocalStorage === null || tableLocalStorage === '[]' ? false : true
  table = isLocalStorageNull ? JSON.parse(tableLocalStorage) : [] 

  let isSaveDisabled = true
  let isRemoveDisabled = isLocalStorageNull ? false : true

  translate = (source) => {
    m.jsonp({
      method: "POST",
      url: URL_JSON+"?key=" + KEY + "&text=" + source + "&lang=de-en",
      header: {"Content-type": "application/x-www-form-urlencoded"}
    })
    .then(function(items) {translated = typeof items.text === 'undefined' ? '' : items.text[0]}
    )
    isSaveDisabled = false
  }

  addField = () => {
    if(source === '' || translated === '') return 0

    sourceView = m('td', source)
    translationsView = m('td', translated)
    table.unshift(m("tr",sourceView,translationsView))
    source = translated = ''

    localStorage.setItem('table', JSON.stringify(table))
    isRemoveDisabled = false
  }
  removeField = () => {
    table = []
    localStorage.setItem('table', JSON.stringify(table))
    isRemoveDisabled = true
  }
  updateFields = () => {}

  updateInput = (input) => {source = input}
  displaySources = () => sourceView
  displayTranslations = () => translationsView
  displayRow = () => table.push(m("tr",displaySources(),displayTranslations()))

	return {
		view: () =>
      m('div.container',
        m('div.row.align-items-baseline',
          m('div.col-4',
            m("input[type='text'][placeholder='type in German']", {
              value: source, 
              oninput:(e)=>{updateInput(e.target.value);},
              onkeyup:(e)=>{
                clearTimeout(typingTimer)
                typingTimer = setTimeout(() => {translate(e.target.value)}, 1000);
              },
              onkeydown:(e) => {clearTimeout(typingTimer)}
          })
          ),
          m('div.col-4.text-wrap', m('p.m-0', translated || m('p.m-0.text-muted','English translation will appear here'))),
          m('div.col-4', m('input.btn.btn-primary[type=button][value=save translation to the table]', {onclick:()=>{addField()}, disabled: isSaveDisabled})),

          m("table.table.mt-5",
            m("thead", 
              m("tr",
                m("th",  "German"),
                m("th",  "English"),
              )
            ),
            m("tbody",
              table.map(r=>r)
            ),
          ),

          m('div.container',
            m('div.row', 
              m('div.col-4'),
              m('div.col-4'),
              m('div.col-4',
                m('input.btn.btn-danger[type=button][value=remove the table]', {onclick:()=>{removeField()}, disabled: isRemoveDisabled})
              ),
              
            ),
          )
        ),
      )
	}
}

// ref: 
// https://stackoverflow.com/a/4220182/6025059

module.exports = TranslateAPI;

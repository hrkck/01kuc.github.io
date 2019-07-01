// ./views/TranslateAPI.js
// The page to translate words


const m = require('mithril')


const TranslateAPI = () => {
  let KEY = "trnsl.1.1.20180724T121917Z.f86593e821feea59.2382b7446bfa437a2a2d70fa363fcf14824c361c"
  let URL_JSON = "https://translate.yandex.net/api/v1.5/tr.json/translate"

  let textSource = localStorage["source"] || "Aufmerksamkeit"
  let textTarget = localStorage["target"] || "uninitiated"
  let translated = 'no response'
  
  translate = () => {
    m.jsonp({
      method: "POST",
      url: URL_JSON+"?key=" + KEY + "&text=" + textSource + "&lang=en",
      header: {
        "Content-type": "application/x-www-form-urlencoded", 
      }
    })
    .then(function(items) {
        console.log(items)
        translated = items.text[0]
    })
  }

	return {
		view: () =>
      m('div',
        m('textarea', {value: textSource}),
        m('p', textTarget),
        m("input[type='button'][value='translate!']", {onclick:()=>translate()}),
        m('p', translated)
      )

	}
}


module.exports = TranslateAPI;

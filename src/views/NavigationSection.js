//./views/NavigationSection

const m = require('mithril')
const state = require('../models/state')


const NavigationSection = {
  view: (vnode) =>
    m("div",
      m("nav",
        m(".nav.nav-tabs[id='nav-tab'][role='tablist']",
          m("a.nav-item.nav-link[aria-controls='nav-home'][aria-selected='true'][data-toggle='tab'][href='#nav-latest_posts'][id='nav-latest_posts-tab'][role='tab']", "latest posts"),
          m("a.nav-item.nav-link.active[aria-controls='nav-search_tag'][aria-selected='false'][data-toggle='tab'][href='#nav-search_tag'][id='nav-search_tag-tab'][role='tab']", "search by tags"),
          m("a.nav-item.nav-link[aria-controls='nav-contact'][aria-selected='false'][data-toggle='tab'][href='#nav-contact'][id='nav-contact-tab'][role='tab']", "super awesome tab")
        )),
      m(".tab-content[id='nav-tabContent']",
        m(".tab-pane.fade[aria-labelledby='nav-latest_posts-tab'][id='nav-latest_posts'][role='tabpanel']", 
          m('div.container', vnode.attrs.latest_posts)
        ),
        m(".tab-pane.fade.show.active[aria-labelledby='nav-search_tag-tab'][id='nav-search_tag'][role='tabpanel']", vnode.attrs.search_tag),
        m(".tab-pane.fade[aria-labelledby='nav-contact-tab'][id='nav-contact'][role='tabpanel']", m(SuperAwesomeTab))
      )
    )
}

const SuperAwesomeTab = {
  view: ()=>
    m('div.container.row.m-3',
      m('p', "there is nothing here. but possibilities are endless. the web is our canvas.")
    )
}

module.exports = NavigationSection
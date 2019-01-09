// ./views/Graph.js
// Draw a functional graph

const m = require('mithril')

const style = {
  border: '1px solid black'
}


const Graph = {
  view: (vnode) =>
    m('div',
      m('canvas', {style: style, id:"", width:'360', height:'360', funcs: vnode.attrs.funcs, oncreate: vnode.attrs.drawFunc})
    )
}


module.exports = Graph

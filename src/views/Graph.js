// ./views/Graph.js
// Draw a functional graph
// Attachables (attributables):
//  - a list of javascript mathematical function
//  - a drawer function
//  - a limit for the x and y axes
//  - step size to draw intervals


const m = require('mithril')


const Graph = {
  view: (vnode) =>
    m('div',
      m('canvas', {style: `border: '1px solid black'`, id:"", width:'360', height:'360', funcs: vnode.attrs.funcs, oncreate: vnode.attrs.drawFunc, limit: vnode.attrs.limit, step: vnode.attrs.step})
    )
}


module.exports = Graph

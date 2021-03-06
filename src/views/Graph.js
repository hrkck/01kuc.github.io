// ./views/Graph.js
// Draw a functional graph
// Attachables (attributables):
//  - a list of javascript mathematical function
//  - a drawer function
//  - a limit for the x and y axes
//  - step size to draw intervals


const m = require('mithril')


const style = {
  border: '1px solid black'
}

const Graph = {
  view: (vnode) =>
    m('div',
      m('canvas.img-fluid', {style: style, id:"", width:'480', height:'480', funcs: vnode.attrs.funcs, oncreate:  vnode.attrs.drawFunc, onupdate: vnode.attrs.drawFunc, limit: vnode.attrs.limit, step: vnode.attrs.step})
    )
}


module.exports = Graph

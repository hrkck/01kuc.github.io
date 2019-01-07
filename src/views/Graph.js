// ./views/Graph.js
// Draw a functional graph

const m = require('mithril')
const draw = require('../helpers/draw')

const Graph = {
  oncreate: () => {

  },
  view: (vnode) =>{

    return (
        m('div',
          m('canvas', {id:"", width:'300', height:'300', funcs: vnode.attrs.funcs, oncreate: draw})
        )
    )
  }
}

module.exports = Graph

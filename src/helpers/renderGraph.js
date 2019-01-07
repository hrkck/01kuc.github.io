// ./helpers/renderGraph.js

const m = require('mithril');
const Graph = require('../views/Graph')

const renderGraph = (...args) => m(Graph, {funcs: args})


module.exports = renderGraph

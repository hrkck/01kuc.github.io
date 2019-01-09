// ./helpers/renderGraph.js
// A functional snippet to draw functions
// See ./src/views/Graph for more

// example:
// graph('x', 'Math.sin(x)')
// ... will draw two functions


const m = require('mithril');
const Graph = require('../views/Graph')
const drawFunction_old = require('./drawFunction_old')


const oldGraph = (...args) => m(Graph, {funcs: args, drawFunc: drawFunction_old})


module.exports = oldGraph

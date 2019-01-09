// ./helpers/renderGraph.js
// A functional snippet to draw functions
// See ./src/views/Graph for more

// example:
// graph('x', 'Math.sin(x)')
// ... will draw two functions

// A @NOTE for the future:
// if needed, the drawFunction can also be passed down to `graph` function as a parameter.
// With this, one can create as many draw functions as they want,
// and simply pass the drawer function to the `graph` function without thinking other implementation details.
//
// I could parametrize the limit and the step size of the graph, yet there are other interesting possibilities.
// This could be done by passing down different drawer functions that was configured in-place.
//
// As such, when blogging, a typical graph function would look like this:
// graph(20, 2, drawWithLegend, 'Math.sin(x)')
// or
// graph(30, 5, drawOnlyPositiveQuartier, 'x + 42', '35 - x')
// and so on...


const m = require('mithril');
const Graph = require('../views/Graph')
const drawFunction = require('./drawFunction')


const graph = (limit, step, ...args) => m(Graph, {limit: limit, step: step, funcs: args, drawFunc: drawFunction, })


module.exports = graph

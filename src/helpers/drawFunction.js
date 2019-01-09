// ./helpers/draw.js
// Code Credit: http://www.javascripter.net/faq/plotafunctiongraph.htm

// To render a mathematical function, it must be given as a javascript function:
// function fun1(x) {return Math.sin(x);  }
// function fun2(x) {return Math.cos(3*x);}
// and so on  ...

// there are fundemental three functions:
// showAxes: draw the axes on canvas
// funGraph: draw the given function
// draw: Get canvas data and draw the axes and functions

// makeFunc: is a helper function to convert mathematical expressions given as strings to formal javascript functions


const colors = [
  'red',
  'blue',
  'green',
  'magenta',
  'purple',
  'yellow',
  'darkred',
  'darkmagenta',
  'cyan'
]

const makeFunc = (math_exp) => Function('x', 'return ' + math_exp)

const draw = (e) => {
  let canvas = e.dom // the tag
  let functions = e.attrs.funcs.map(str => makeFunc(str)) // math expressions need to be passed as javascript functions.

  if (null==canvas || !canvas.getContext) return

  let axes = {}
  let ctx = canvas.getContext("2d")
  axes.x0 = .5*canvas.width  // x0 pixels from left to x=0
  axes.y0 = .5*canvas.height // y0 pixels from top to y=0
  axes.scale = canvas.width/(2*e.attrs.limit)// 18 pixels from x=0 to x=1 !! WOW MATH! or max '10' intervals! VERY IMPORTANT VAR
  axes.doNegativeX = true

  showAxes(ctx,axes,e.attrs.step)
  let c = 0
  functions.map(func => {
    funGraph(ctx, axes, func, colors[c++], 2)
  })
  // Exmaple funcions to draw
  // funGraph(ctx,axes,fun1,"red",1);
  // funGraph(ctx,axes,fun2,"green",2);
}

const funGraph = (ctx,axes,func,color,thick) => {
  let xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale
  let iMax = Math.round((ctx.canvas.width-x0)/dx)
  let iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0
  ctx.beginPath()
  ctx.lineWidth = thick
  ctx.strokeStyle = color

  for (var i=iMin;i<=iMax;i++) {
    xx = dx*i; yy = scale*func(xx/scale)
    if (i==iMin) ctx.moveTo(x0+xx,y0-yy)
    else ctx.lineTo(x0+xx,y0-yy)
  }
  ctx.stroke()
}

const showAxes = (ctx,axes,steps) => {
  let x0=axes.x0, w=ctx.canvas.width
  let y0=axes.y0, h=ctx.canvas.height
  let xmin = axes.doNegativeX ? 0 : x0
  ctx.beginPath()
  ctx.strokeStyle = "grey"
  ctx.font = '10px monospace bold'
  ctx.moveTo(xmin,y0);ctx.lineTo(w,y0)   // X axis
  ctx.moveTo(x0,0);ctx.lineTo(x0,h)  // Y axis
  ctx.moveTo(xmin, y0) // start drawing the intervals:
  for(let i = xmin; i <= x0*2; i += axes.scale*steps){
    ctx.moveTo(i, y0+axes.scale/4) // goes down // math behind: interval line is so long as quarter of a step (unit: pixel)
    ctx.lineTo(i, y0-axes.scale/4) // goes up
    ctx.fillText(i/axes.scale - w/(2*axes.scale), i-axes.scale/4, y0+axes.scale) //
  }
  ctx.moveTo(x0, 0)
  for(let i = 0; i <=y0*2; i += axes.scale*steps){
    ctx.moveTo(x0+axes.scale/4, i) // goes left
    ctx.lineTo(x0-axes.scale/4, i) // goes right
    ctx.fillText(-i/axes.scale + w/(2*axes.scale), x0-axes.scale, i+axes.scale/4) //
  }
  ctx.moveTo(x0, y0)
  ctx.fillText(y0, 1, 360)
  ctx.stroke()
}

module.exports = draw

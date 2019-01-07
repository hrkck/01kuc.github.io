function fun1(x) {return Math.sin(x);  }
function fun2(x) {return Math.cos(3*x);}

const colors = [
  'red',
  'blue',
  'green',
  'pink',
  'purple',
  'yellow',
  'darkred',
  'darkmagenta',
  'cyan'
]

const makeFunc = (math_exp) => Function('x', 'return ' + math_exp)

function draw(e) {
  console.log('i am loaded') // test loaded or not
  // var canvas = document.getElementById("canvas"); // old code
  var canvas = e.dom // the tag
  var functions = e.attrs.funcs.map(str => {
    console.log(str)
    return makeFunc(str)
  }) // math expressions need to be passed as javascript functions.
  console.log(functions[1])
  if (null==canvas || !canvas.getContext) return;

  var axes={}, ctx=canvas.getContext("2d");
  axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
  axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
  axes.scale = 40;                 // 40 pixels from x=0 to x=1
  axes.doNegativeX = true;

  showAxes(ctx,axes);
  for(var i=0; i<functions.length; i++){
    funGraph(ctx, axes, functions[i], colors[i], 2)
  }
  // funGraph(ctx,axes,fun1,"rgb(11,153,11)",1);
  // funGraph(ctx,axes,fun2,"rgb(66,44,255)",2);
}

function funGraph (ctx,axes,func,color,thick) {
  var xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
  var iMax = Math.round((ctx.canvas.width-x0)/dx);
  var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
  ctx.beginPath();
  ctx.lineWidth = thick;
  ctx.strokeStyle = color;

  for (var i=iMin;i<=iMax;i++) {
  xx = dx*i; yy = scale*func(xx/scale);
  if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
  else         ctx.lineTo(x0+xx,y0-yy);
  }
  ctx.stroke();
}

function showAxes(ctx,axes) {
  var x0=axes.x0, w=ctx.canvas.width;
  var y0=axes.y0, h=ctx.canvas.height;
  var xmin = axes.doNegativeX ? 0 : x0;
  ctx.beginPath();
  ctx.strokeStyle = "rgb(128,128,128)";
  ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
  ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
  ctx.stroke();
}

module.exports = draw

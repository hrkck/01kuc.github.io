---
title: Plotting a function
tags: plot function example,features
url: plot_example
baseUrl: FeaturesPage
date: 2019-01-31
---
Here is a function plotted using some javascript and HTML canvas tags. 

<<< graph(10, 2, 'x', '-x+10', '1/10*x**2', 'x**3', 'Math.sin(x)', 'Math.cos(x)', '-x', '-5', '-7') >>>

The syntax to render it is simple:

<<< code(`graph(10, 2, 'x', '-x+10', '1/10*x**2', 'x**3', 'Math.sin(x)', 'Math.cos(x)', '-x', '-5', '-7')`) >>>

My aim in writing this little feature is to be able to plot functional graphs as fast as you would draw them by hand on paper. Still got lots to do...

I took the starter code from [this javascripter.net post](http://www.javascripter.net/faq/plotafunctiongraph.htm)
---
title: KaTeX Example
tags: katex,math,features
url: katex_example
baseUrl: FeaturesPage
date: 2019-01-31
---
I am using [KaTeX](https://katex.org/) to render my mathematical functions.

<<< hyperscript(`m('p',	
		'an inline math expression, ', 
		math('x = oo'), 
		' more inline text ', 
		)`) >>> 
 
and a block math...

<<< math(`sum_(i=1)^(n)i^3 = ((n(n+1))/2)^2`) >>> \n

and markdown continues here.

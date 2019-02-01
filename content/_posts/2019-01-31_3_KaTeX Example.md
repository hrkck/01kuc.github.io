---
title: KaTeX Example
tags: katex,math,features
url: katex_example
baseUrl: FeaturesPage
date: 2019-01-31
---
I am using [KaTeX](https://katex.org/) to render my mathematical functions. Currently, they can't be inline. 

But I intend to solve this problem by interfering with the converter functions of rendering special expressions. If the expressions that are meant to be inline are processed together, then things can be made inline or block at will. 

a block math expression,

escape math(`block`, `i = oo`) end
\n

another...

escape math(`block`, `sum_(i=1)^(n)i^3 = ((n(n+1))/2)^2`) end
\n

and markdown continues here.
---
title: Markdown Rendering
tags: markdown_rendering,features
url: markdown_rendering
baseUrl: FeaturesPage
date: 2019-01-31
---
##Sample Markdown

This is some basic, sample markdown.

Some fundemental markdown features are working. Some don't. I will fix them later by using RegEx functions.

###Issues

Ordered lists, blockquotes and some other features are not working. Because during the converting process of this markdown post to hyperscript, whitespaces that surround special markdown syntax (such as bold chars \*text\*) [dissappear](https://stackoverflow.com/questions/15721373/how-do-i-ensure-that-whitespace-is-preserved-in-markdown). This results in bold, italic text, or links that are sticked to the words before and after them. 

As a workaround, before converting this markdown, I replace all white space with `&nbsp;` characters. 

However, since I am using bootstrap to add some simple styling to the page, long text in a narrow page does not get wrapped up and it goes on horizontally. Why does CSS fails to wrap the words correctly? Because there are no more white spaces! A CSS attribute such as `word-wrap:break-all` works fine, but it breaks in the middle of the word, which is not good.

This is why after converting the markdown to hyperscript, I replace the `&nbsp;` characters back to good old white spaces. Apparently, this is breaking some of the markdown's native features... 

And also, the white spaces between this ```<`>``` special quotation chars are rendered as ` ` (I literally placed a white space in between these [grave accents](https://en.wikipedia.org/wiki/Grave_accent) to render it)

ヾ( ￣O￣)ツ

Okay... Here are some styles that are _not_ **broken**... A link [to duckduckgo](https://duckduckgo.com)

* Most of the problems are fixed by regex.
* And the rest will be fixed by regex
* too...

A render from [blender.org](https://archive.blender.org)'s archive...

Code blocks, mathematical expressions and plotting functional graphs are classified as `special-functions`. So they are discussed in other posts. Search `features` tag to see all posts related to the content types of this website.

![Calibri](https://archive.blender.org/typo3temp/pics/bee472a01f.jpg)

The end ...

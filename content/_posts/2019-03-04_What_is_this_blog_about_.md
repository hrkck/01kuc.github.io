---
title: What is this blog about?
tags: this_blog
url: what_is_this_blog_about
baseUrl: 
date: 2019-03-04
---
About three years ago I started building a static blog hosted on github pages. I was using [Jekyll](https://jekyllrb.com/) to generate templates. I liked it, but not much. For a long time I considered writing a blog engine myself but internet told me not to do it. For the ideas to surface again I needed to wait for about a year...

Sometime around June 2018 I started rebuilding the blog using React.  [The result](https://archetypum.github.io/wellput/) was quite interesting for me. But once it took the shape I envisioned in my mind, it started to feel useless and time consuming.  *What problem was it solving? Why did I need it?*

I was so blinded with my own code. It was growing faster but its value was growing smaller faster. The blog  *itself*  became the focus. I was blogging and it did not solve anything.

That teached me something. I had to focus on problem solving. Not writing some lines of code and expecting some magic to happen that I would become a prolific blogger. 

I lost my enthusiasm. The blog was standing there alone. Not only that I learned awesome things while doing it but I was also not able to document them because I could not end up having a nice blog to blog about.

Don't tell me what did not I just go for wordpress or something like. I don't have precious ideas that worlds need to know about. I am a student whose aim to learn. And all I needed was a place where I could keep a log of my own learning process in this Universe.  And I wanted to have this place  *private* . (**side note**: The idea goes that, later I will set my own servers to make this website live on internet in contrast to serving it on gh-pages).

Then I met [Mithril JS](https://mithril.js.org/). I learned it and I loved it. It was more attractive then React. As a dweller of Archlinux and having only open source softwares on my computer I quickly favored Mithril over React for its small, compact, elegant and terse code, documentation and community. The community is really awesome. Check it out: [https://gitter.im/mithriljs/mithril.js](https://gitter.im/mithriljs/mithril.js)

---

So I decided to rebuild the blog from scratch using Mithril. For navigation I had to find a different approach. In the React blog, I used an upper menu to list all the categories as buttons and subpages as dropdown lists and even a grotesque looking sidepane menu. It was like navigating a spaghetti even for me. I needed a robust and simple looking system to find what I was looking in the shortest time. There should be any hidden parts in the blog unless I really want it to be.

I decided to use tags. If I tag every post upon creation, then I can list the tags and search the tags to find what I was looking for. This simple idea turned out to be the best option later on.

So after a training for about a month I started making this blog again. Surprisingly, it took its rough shape so quickly. To finish all the core features I planned took a mere two months finally. 

And at the end, I was happy with how it felt to use the website to reach the content. But there was  *the*  problem again: The entire blog was so sluggish that to add a post was a pain in the ass. I could not really easily see what I was writing and once I was finished writing a post it was a couple of steps to add it to the content list. It lacked a mechanism. I needed a server to handle file operations automagically. 

This is where NodeJS came in. It took me two days to understand why NodeJS was not working from my browser and why it  *was not*  supposed run anyway. I took me another day to be able to run a NodeJS script from npm commands. But once the configurations were done and I understood what is what and how to take advantage of these technologies, it only took a lazy friday to write the missing mechanism to automate the tasks of parsing a markdown file on create or on update, adding it to the list of posts and interpreting this list to convert them to hyperscript and then to HTML. A long but micro-level set of steps to create a smooth blogging experience. 

There it was! My little humble blog, my digital notebook.

While developing the blog, I owe many credit to many corners of the internet. I cannot list them all here yet I have to list them all at least somewhere. I plan to write about them as I document the code of this website. 

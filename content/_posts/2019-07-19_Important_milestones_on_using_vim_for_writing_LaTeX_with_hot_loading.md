---
title: Important milestones on using vim for writing LaTeX with hot loading
tags: latex,vim,hotloading
url: Important_milestones_on_using_vim_for_writing_LaTeX_with_hot_loading
baseUrl: 
date: 2019-07-19
---
So I want to use VIM for LaTeX with hotloading feature enabled.

In Archlinux, install,

- [LaTeX Live ](https://wiki.archlinux.org/index.php/TeX_Live) 
- [xdotool](https://www.archlinux.org/packages/?name=xdotool) 
- [vim-pathogen](https://aur.archlinux.org/packages/vim-pathogen/)
- [biber](https://www.archlinux.org/packages/community/any/biber/)


Add this to the `.vimrc`:

 <<< code(`execute pathogen#infect()
syntax on
filetype plugin indent on`) >>> 

that is it!

REFERENCES:
- [Luke Smith's article](https://lukesmith.xyz/latex.html)
- [the stack answer](https://stackoverflow.com/a/8160809/6025059) that explains what a goddamn 'leader' is

eof
---
title: The Year Clock
tags: a-year-clock
url: the_year_clock
baseUrl: 
date: 2019-02-01
---
here is an idea that struck to Niko on an evening of January… :

<<< hyperscript(`m('img.tommy-niko-jasmin-hakki', {
                      src: 'content/media/tommy-niko-jasmin-hakki.png', 
                      alt: 'tommy-niko-jasmin-hakki',
                      //https://stackoverflow.com/a/51817813/6025059
                      oncreate: (vnode)=>{ // use vnode not 'e'!!! AND USE ONLY MITHRILS LIFECYCLES METHODS!
                        let inception = new Date('January 17, 2019 22:10:00');
                        let now = new Date();
                        let deg = (360/365) * Math.floor((now-inception)/(1000*60*60*24)); // convert miliseconds to degrees
                        setTimeout(()=>{vnode.dom.setAttribute("style", "transform: rotate(" + deg + "deg)")},1000)
                      }
                    })    
`) >>>


This picture will rotate clock-wise by .986 degree a day. For instance, in 365 days, it will appear without any orientation. As the picture rotates, each person will tell a date. Therefore, since the picture is taken on 17 January, Tommy corresponds to Winter, I to Spring, Jasmin to Summer and Niko to Autumn.

A simple `new_Date()` output controls rotation of the image and that does the js trick.

<<< code(`oncreate: (vnode)=>{ // use vnode not 'e'!!! AND USE ONLY MITHRILS LIFECYCLES METHODS!
  let inception = new Date('January 17, 2019 22:10:00');
  let now = new Date();
  let deg = (360/365) * Math.floor((now-inception)/(1000*60*60*24)); // convert miliseconds to degrees
  setTimeout(()=>{vnode.dom.setAttribute("style", "transform: rotate(" + deg + "deg)")},1000)
}
`) >>>
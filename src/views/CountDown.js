// ./views/CountDown.js
// A demonstration of basic routing in Mithril JS

const m = require('mithril') 
const markdown = require('../helpers/renderMarkdown')
const SearchTag = require('../models/SearchTag')
const LayoutPostList = require('./LayoutPostSolo')
const Link = require("./Link")



let deadline = new Date('April 13, 2019 20:10:00');
let now = new Date();
let remaining = deadline-now
let days = Math.floor((remaining)/(1000*60*60*24)); // convert miliseconds to degrees
let hours = Math.floor((remaining)/(1000*60*60) % 24);
let mins = Math.floor((remaining)/(1000*60) % 60);
let secs = Math.floor((remaining)/(1000) % 60);
// let diff = deadline-now




const CountDown = () =>   {
  
  let startCountDown = () =>{
    
    
  }
  
  return {
    oncreate: ()=>{
      setInterval(() => {
        remaining -= 1000
        days = Math.floor((remaining)/(1000*60*60*24)); // convert miliseconds to degrees
        hours = Math.floor((remaining)/(1000*60*60) % 24);
        mins = Math.floor((remaining)/(1000*60) % 60);
        secs = Math.floor((remaining)/(1000) % 60);
        m.redraw();
      }, 1000);
      
    },
    view: () =>
      m('div.text-center.mt-5', 
        m('h1','PARTY COUNTDOWN'),
        m('div.m-5'),
        m('h3', 'for the ducking 2south rocknrollers'),
        
        m('div.m-5'),

        m('h1.text-center', days, ' days ', hours, ' hours ', mins, ' minutes ', secs, ' seconds left.'),
      )    
  }
      
}


module.exports = CountDown;

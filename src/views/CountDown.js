// ./views/CountDown.js
// A demonstration of basic routing in Mithril JS

const m = require('mithril') 
const markdown = require('../helpers/renderMarkdown')
const SearchTag = require('../models/SearchTag')
const LayoutPostList = require('./LayoutPostSolo')
const Link = require("./Link")



let deadline = new Date('April 13, 2019 20:10:00');
let now = new Date();
let days = Math.floor((deadline-now)/(1000*60*60*24)); // convert miliseconds to degrees
let hours = Math.floor((deadline-now)/(1000*60*60) % 24);
let mins = Math.floor((deadline-now)/(1000*60) % 60);
let secs = Math.floor((deadline-now)/(1000) % 60);
// let diff = deadline-now


const CountDown = {
  view: () =>
   m('div.text-center.mt-5', 
    m('h1','PARTY COUNTDOWN'),
    m('div.m-5'),
    m('h3', 'for the ducking 2south rocknrollers'),
    
    m('div.m-5'),

    m('h1.text-center', days, ' days ', hours, ' hours ', mins, ' minutes ', secs, ' seconds left.'),
  )    
      
}


module.exports = CountDown;

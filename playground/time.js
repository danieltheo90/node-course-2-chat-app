// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

var moment = require('moment');
// var date = moment();
// date.add(100,'year').subtract(9,'months');
// console.log(date.format('MMM Do, YYYY'));

var  someTimestap = moment().valueOf();
console.log(someTimestap);
var createAT = 1234;
var date = moment(createAT);
console.log(date.format('h:mm a'));
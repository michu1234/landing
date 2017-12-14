let daysPlaceholder = document.querySelector(".inputForm__timer-item:first-child");
let hourPlaceholder = document.querySelector(".inputForm__timer-item:nth-child(2)");
let minutesPlaceholder = document.querySelector(".inputForm__timer-item:nth-child(3)");
let secondsPlaceholder = document.querySelector(".inputForm__timer-item:nth-child(4)");






var eventTime = moment([2017, 12, 24]);
var currentTime = moment.format(s); // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT

var diff = currentTime.from(eventTime)
console.log(diff);


var diffTime = eventTime - currentTime;
var duration = moment.duration(diffTime*1000, 'milliseconds');
var interval = 1000;

setInterval(function(){
  duration = moment.duration(duration - interval, 'milliseconds');
    $('.countdown').text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
}, interval);


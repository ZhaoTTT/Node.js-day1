//setTimeout:once
var count=0;
setTimeout(function(){
    count++;
    console.log("set timeout "+ count);
},1000);
//not very useful for session application. 
//set time out is a delay
//session time out is after a time, clear all info


//setInterval:every 1000ms
var countForInterval=0;
setInterval(function(){
    countForInterval++;
    console.log('set interval '+ countForInterval);
},1000);
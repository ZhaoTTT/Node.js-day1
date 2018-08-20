//import express library
const expresss = require('express');

//instantiation
var app = expresss();

//create an end point
//get is a function, 1st param is endpoint which means url end with "/"(also called entry point); 2nd param is function
app.get('/',function(req,res){
    res.send('Hello World, again');
});
//get(end at slash, as entry point,)

app.listen(1337, function(){
    //callback function
    console.log('Server is running at localhost:1337.');
});

//npm i nodemon --global
//all apps can use this package, not just this project

//Another write method
// app.get('/',(req,res)=>{
//     res.send('Hello World, again');
// });

// app.listen(1337, ()=>{
//     console.log('Server is running at localhost:1337.');
// });
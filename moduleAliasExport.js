var a=function(){
    console.log('a called');
}
var b=function(){
    console.log('b called');
}
module.exports={
    a:a,
    b:b
}

module.exports.c=function(){
    console.log('c called again');
}
module.exports.d=function(){
    console.log('d called again');
}

function e(){
    console.log('e called');
}
module.exports.e=e;
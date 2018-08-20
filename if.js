//1:comparing string/number:  
console.log('-------------1----If----------------');
var x =3;
var y='4';

if(x>4){
    console.log("More than 4");
}else{
    console.log("Less than 4");
}


if(y==4){
    console.log("Hi 4 here");
}

if(y=='4'){
    console.log('Hi 4 here string')
}
if(y=== 4){
    console.log('Hi 4 here again')
}


//2: switch
console.log('--------------2---Switch----------------');

var x1=2;
switch(x1){
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        //continue;
    default:
        console.log('3');

}

//3: Loops
console.log('--------------3---Loops:while,do while,foreach,for----------------')
var x2=[1,2,3,4,5];
var i=5;

console.log('-----while/do while-----');
while(i<10){
    i++;
    console.log("while loop +++ " +i);
}

do{
    console.log("do while +++ " +i);
}while(i<10)

console.log('-----for-----');
for(var i=0;i<x2.length;i++){
    console.log(x2[i]);
    if(x[i]==3){
        break;
    }
}

console.log('-----forEach-----');
x2.forEach(function(idx,value){
    console.log(idx);
    console.log(value);
});
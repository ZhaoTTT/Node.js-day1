var person={
    age : 20,
    first_name : 'Tong'
}

function test(){
    return person;
}

p = test();
console.log(p);
console.log(p.age);

//dangerous js language: type is not defined
console.log('--------function 1------Fundamentals & Anomymous Function----');
function say(word){
    console.log('Hi~ '+ word);
}
function execute(someFunction, value){
    someFunction(value);
}
execute(say,"Hello");
execute(function(){
    console.log('anonymous');
},'anonymous function value');
//you can also use anonymous function
// function anonymousFunction(){

// }
console.log('--------------------------');


console.log('--------function 2------IIEF:Immediate Invode Executing Function ----');
//invoke function wrap in parenthesis().
(function test(){
    console.log('I am a IIFE');
}
//cannot have multiple functions inside one ()
)();
console.log('--------------------------');


console.log('--------function 3: Anonymous Function--------');
//function without a name;
//function that passed as a parameter
//function can be saaigned to a variable;
//ways of defining inline function;
var f1 = function nameMe(){
    console.log('Hello me!');
}
f1();

//the following way can reusable
function nameYou(){
    console.log('Hello you!');
}
var f2=nameYou;
var f3=f2;
nameYou();
f2();
f3();
var f4=function(){
    console.log('this is anonymous');
}
f4();
console.log('--------------------------');


console.log('--------function 4: Higher order function--------');
//pass functions to other functions;
//functions that take functions as arguments
//setTimeout function

function foo1(){
    console.log('Hello foo1');
}
function foo2(){
    console.log('Hello foo2');
}
setTimeout(foo2,2000);
setTimeout(foo1,3000);
//run first whose waiting time is shorter
//after 2s, this function will terminate. 

//it doesn't call in sequence!!
console.log('--------------------------');


console.log('--------function 5: Closures--------');
//function defined inside another function!!
//inner function has access to the variables declared in the outer function
//variables in the outer function have been closed by the inner fucntion
//variables are still bound in the inner function and not dependent on the outer function
function incrementByOne(arg){
    let value = arg;//value is local scope variable
    return function(){
        console.log(value+1);
    }
}
var t = incrementByOne(4);
t();

console.log('--------------------------');
//Module 1: export & require
var Person4=require('./person');

var p=new Person4('test1','test2',30);
console.log(p);//Person4 { firstName: 'test1', lastName: 'test2', age: 30 }


//related to person.js.
//global objects-------
//Case 1:
console.log(global.g_middleName);//Manny
console.log(this.g_middleName);//undefined
console.log(g_middleName);//Manny

//Case 2:
// console.log(global.g_middleName);//Manny
// console.log(this.g_middleName);//undefined
// console.log(g_middleName);//undefined
// var g_middleName = 'Noman';
// console.log(g_middleName);//Noman




//Module 2: export alias
var abcd=require('./moduleAliasExport');
var a=abcd.a();
var b=abcd.b();
var c=abcd.c();
var e=abcd.e();
console.log(a);
console.log(b);
console.log(c);
console.log("",e);
console.log(e);



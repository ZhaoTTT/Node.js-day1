var Person4=require('./person');

console.log('--------1---------');
var Person = {
    first_name: 'Tonya',
    last_name: 'Zhao',
    age:20,
    func:sayHi
}

function sayHi(){
    console.log("sayHello");
}

console.log(Person);

Person.salary=2000;
console.log(Person);

delete Person.age;
console.log(Person);

Person.func();
Person.func;//no output
var xFunc=Person.func;
xFunc();

var p=Person;
console.log(typeof(p));


console.log('--------2---------');
function Person2(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}
var p2=new Person2('Vanessa','Hudgens',28);
console.log(p2 instanceof Person2);//boolean: false


console.log('--------class Person4---------');

var p4=new Person4('Ashley','Tisdale',30);
console.log(p4 instanceof Person4);//boolean: false
console.log(p4.getFirstName());



//4:??
// console.log('------4------')
// var x3=[1,2,3,4,5];
// console.log(x3.indexOf(3));
// y = x3.slice(1,4);
// console.log(y);

// // var animals=['ant','bison','camel','duck','elephant'];
// // //console.log(animals.slice(2));
// // console.log(animals.slice(1,1));

// var months=['Jan','March','April','June','July','August','Sep'];
// months.splice(4,2,'May');
// console.log(months);


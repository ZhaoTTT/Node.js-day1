var a = ['Apple',true,5,'&'];

console.log(typeof (a[1]));
function xname(){
    console.log('I am xname function');
}
function isUnderage(){
    console.log('I am isUnderage function');

}

var person={
    age:20,
    'is he ok': true,
    //birthDate: xname
    isUnderage:isUnderage
}

console.log('---------------');
console.log(person);
console.log(typeof(person.isUnderage));
console.log(person.age);
console.log(person['is he ok']);
console.log('---------------');
person={};
console.log(person);

var yy=[2,1,3];
yy.push(4);//append from the end
console.log(yy);

yy.pop();//remove from the end
console.log(yy);

yy.unshift(1);//insert new element at the start
console.log(yy);

yy.shift();//remove from the start
console.log(yy);

var newyy=yy.join(', ');//copy old array to new array and new format(a specific separator string)//old array
console.log(newyy);
console.log(yy);

yy.sort();//no new array
console.log(yy);

console.log(yy.sort());

console.log(a.sort());
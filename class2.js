
//super class
class Animal{
    constructor(name,age,noOfLegs){
        this.name=name;
        this.age=age;
        this.noOfLegs=noOfLegs;
    }

    getLegs(){
        return this.noOfLegs;
    }
}

//subclass
class Cat extends Animal{
    constructor(name,age,noOfLegs){
        super(name,age,noOfLegs);

    }

    getLegs(){
        return 5;
    }

    getName(){
        return this.name;
    }
}

var a= new Animal('Hello Kitty',2,4);
console.log(a);
var c=new Cat('Doreamon',2,4);
console.log(c.getLegs());
console.log(c.getName());

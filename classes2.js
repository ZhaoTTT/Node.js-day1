console.log('-----2-----');
//shape class
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

class Animal{
    constructor(name,age,noOfLegs){
        this.name=name;
        this.age=age;
        this.noOfLegs=noOfLegs;
    }

    getLegs(){
        return this.noOfLegs;
    }
    
    getName(){
        return this.name;
    }

}
var a= new Animal('Hello Kitty',2,4);
console.log(a);
//Cat.prototype=new Animal
var c=new Cat('Dore',2,4);
console.log(c.getLegs());
console.log(c.getName());

var x = 1;
var x2 = 2;
//global variable

function make(isOk,make2){
    //let x = 1;
    //let? get the local variable
    console.log(isOk);
    console.log(x);
    make2();
}

function make2(){
    //let x = 1;
    //let? get the local variable
    console.log(x2);
}

let isOk = false;

make(isOk,make2);
make2();
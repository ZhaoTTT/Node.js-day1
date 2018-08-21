//promise
//callback
//?
var fs=require('fs');//introduce in a module

fs.readFile('exampleFile.txt',function(err,logData){
    if(err) throw err;
    let text=logData.toString();
    let results=[];

    var lines=text.split('\n');
    lines.forEach(function(value,idx){//call back function
        var parts=value.split(' ');
        var word=parts[1];
        var count=parseInt(parts[2]);
        if(!results[word]){
            results[word]=0;
        }//running behind

        results[word]+=count;
    })
    console.log(results);
});
console.log('Program ended');



//let & var
console.log('------------');
var x = 'global';
let y = 'global';
console.log(this.x); // undefined
console.log(this.y); // undefined
console.log(x); // "global"
console.log(y); // "global"

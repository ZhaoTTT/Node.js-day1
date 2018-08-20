//Error handling
//use the throw JavaScript keyword
//catch exception with a try/catch block

function a(){
    throw new Error("An error!");
}

try{
    a();
}catch(e){
    console.log(e.message);
}finally{
    console.log('finally...');
}
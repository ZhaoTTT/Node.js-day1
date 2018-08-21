const prompt=require('prompt');

var schema = {
    properties: {
      username: {
        pattern: /^[a-zA-Z\s\-]+$/,//with validation
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        hidden: true
      }
    }
  };

  var schema1 = [
    {
        name:"username",
        pattern: /^[a-zA-Z\s\-]+$/,//with validation
        message: 'Name must be only letters, spaces, or dashes',
        required: true
    },
    {
        name:"password",
        hidden: true
    }
  ];

prompt.start();
//prompt.get(['username','password'],function(err,result){//callback function
prompt.get(schema,function(err,result){//callback function

    if(err){//in javascript, you don't need to check err==null
        throw new Error('error in cli');
    }
    console.log('username: '+result.username);
    console.log('password: '+result.password);

});




//https://github.com/flatiron/prompt
//google: github node js prompt
//https://regexr.com 检测正则表达式
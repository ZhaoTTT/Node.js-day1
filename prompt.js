const prompt=require('prompt');

var schema = {
    properties: {
      username: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        hidden: true
      }
    }
  };

prompt.start();
prompt.get(['username','password'],function(err,result){

    if(err){
        throw new Error('error in cli');
    }
    console.log('username: '+result.username);
    console.log('password: '+result.password);

});
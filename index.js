const express = require('express'); //import express module
const app = express();                  //created a app of express module
const PORT = process.env.PORT||5000;      //port to default system port number or 5000
const fs=require('fs');                    //import fs module

if(!fs.existsSync('./watch')){             //checking the folder is already present the directory
  fs.mkdir('./watch',(err)=>{                //if not make one
    if(err) throw err;                                 
    console.log('folder created');
  });
}
                    
//to append the time in file  after every sec
setInterval(()=>{                               
  fs.appendFile('./watch/CurrentTimeStamp.txt',`\n${new Date().toLocaleTimeString()}`,'utf8',(err)=>{
    if(err) throw err;
    console.log("Data stored");
  })
},1000)

//on get displaying the content of the file
app.get('/',(req,res)=>{
  res.sendFile('./watch/CurrentTimeStamp.txt',{root:__dirname});
})

//listen to port
app.listen(PORT,(err)=>{
  if(err) throw err;
  console.log("Listening to PORT",PORT);
})

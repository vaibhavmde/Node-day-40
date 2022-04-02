const express = require('express');
const app = express();
const PORT = process.env.PORT||5000;
const fs=require('fs');

if(!fs.existsSync('./watch')){
  fs.mkdir('./watch',(err)=>{
    if(err) throw err;
    console.log('folder created');
  });
}
setInterval(()=>{
  fs.appendFile('./watch/CurrentTimeStamp.txt',`\n${new Date().toLocaleTimeString()}`,'utf8',(err)=>{
    if(err) throw err;
    console.log("Data stored");
  })
},1000)

app.get('/',(req,res)=>{
  res.sendFile('./watch/CurrentTimeStamp.txt',{root:__dirname});
})

app.listen(PORT,(err)=>{
  if(err) throw err;
  console.log("Listening to PORT",PORT);
})
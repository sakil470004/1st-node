const express = require('express')

const app = express();
const port = 3000;

const handler = (req,res)=>{
    res.send('Hello from node')
}

app.get('/',(req,res)=>{
    res.send('hello from my first ever node')
});
app.listen(port,()=>{
    console.log('listing to post',port)
})
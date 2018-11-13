const express = require('express');
const fortunes = require('./data/fortunes')
const port = 3000;
const app = express();

app.get('/fortunes',(req,res)=>{
   // const translations ={1: 'one',2:'two',3: 'three'}
    res.json(fortunes);
});

app.listen(port,() => console.log('Listen on port $(port)'))

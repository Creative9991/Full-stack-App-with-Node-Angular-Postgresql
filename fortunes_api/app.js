const express = require('express');
const fortunes = require('./data/fortunes')

const app = express();

app.get('/fortunes',(req,res)=>{
   // const translations ={1: 'one',2:'two',3: 'three'}
    res.json(fortunes);
});
app.get('/fortunes/random',(req,res)=>{
    // const translations ={1: 'one',2:'two',3: 'three'}
     console.log('Please check the Random');
     const random_index = Math.floor(Math.random() * fortunes.length)
 });
module.exports = app;



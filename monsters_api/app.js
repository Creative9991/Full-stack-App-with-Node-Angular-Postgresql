const express = require('express');
const bodyParser = require('body-parser')
const monsters = require('./routes/monsters');
const habitats = require('./routes/habitats');


const app = express();
app.use(bodyParser.json());
app.use('/monsters', monsters);
app.use('/habitats', habitats);

app.use((err,req,res,next)=>{
res.json(err);

});
module.exports = app;

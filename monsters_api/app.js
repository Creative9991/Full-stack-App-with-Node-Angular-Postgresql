const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use('/',routes);

// app.use((err,req,res,next)=>{
// res.json(err);
// });


app.use(function (req, res, next) {
    //Enabling CORS
    res.Header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
    res.Header('Access-Control-Allow-Origin', '*');
    res.Header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    
    next();
});

// app.use(cors());


module.exports = app;

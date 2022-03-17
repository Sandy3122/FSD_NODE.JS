var express = require("express");
var app  = express();

const server = require('./server');

//Calling Servers

app.use(express.static('pages'));

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/',server);

app.post('/recipesData',server);

app.listen(2500);
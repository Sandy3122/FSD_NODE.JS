var express = require('express');
var app = express();

const server = require('./server');

app.use(express.static('pages'));
app.get('/', server);
app.get('/sample1', server);
app.get('/sample2', server);
app.get('/sample3', server);

app.listen(4000);
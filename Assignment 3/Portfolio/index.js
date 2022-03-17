var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'Projects')));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/about', function(req, res){
    res.sendFile(__dirname + '/about.html')
});

app.listen(8080, () => console.log('Started'));
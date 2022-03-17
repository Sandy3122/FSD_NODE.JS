const express = require('express');
const router = express.Router();

//File Paths

var pathMain = __dirname + '/pages/home.html'
var pathOne =__dirname + '/pages/sample1.html';
var pathTwo = __dirname + '/pages/sample2.html';
var pathThree = __dirname + '/pages/sample3.html'; 

// to get html files

router.get('/', function(req, res){
    res.sendFile(pathMain);
})
router.get('/sample1',function(req, res){
    res.sendFile(pathOne);
});

router.get('/sample2',function(req, res){
    res.sendFile(pathTwo);
});

router.get('/sample3',function(req, res){
    res.sendFile(pathThree);
});

module.exports = router;
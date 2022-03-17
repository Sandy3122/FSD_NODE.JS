const express = require('express');

const app = express();

app.use(express.static('pages'));

app.use(express.json());

app.use(express.urlencoded({extended:false}));

//To Access Session
const session = require('express-session');
//To Access Session
app.use(session({secret:'sandeep'}));

console.log('current timestamp : ' + Date());


app.get('/', function(req, res){
    if(req.session.visited)
    {
        res.sendFile(__dirname + '/pages/return.html');
    }
    else
    {
        res.sendFile(__dirname + '/pages/login.html');
    }
});


app.get('/home', function (req, res){
    if (req.session.visited==false || req.session.visited == undefined)
    {
        res.sendFile(__dirname + '/pages/error.html');
    }
    else
    {
        res.sendFile(__dirname + '/pages/index2.html');
    }
});

app.get('/loginreq', function (req, res){
    if (req.session.visited)
    {
        res.send("You Are Already Logged In");
    }
    else
    {
        res.sendFile(__dirname + '/pages/login.html');
    }
});


app.get('/logout', function(req, res)
{
    req.session.visited = false;
    res.redirect('/loginreq')
});


app.post('/loginreq', function (req, res){
    if(req.body.username == 'sandeep' && req.body.password == '1999')
    {
        req.session.visited =true;
        res.send({data:"success"})
    }
    else
    {
        res.send({data:"error"})
        // throw new Error('Failed, Please Login With Your Login Credentials');
    }
});

app.listen(8080, ()=> console.log('Started'));
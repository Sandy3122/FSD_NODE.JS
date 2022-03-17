const express = require('express');
const server = express.Router();

//Giving Paths

var recipeData = require("./recipeData");
var PathForIndex = __dirname+'/index.html';

//Getting Data From Index.html
server.get('/', function(req,res)
    {
        res.sendFile(PathForIndex)
    });

//Requesting 
server.post("/recipesData",
    function(req,res)
    {
        var inspect = recipeData.find(checking);
            function checking(recipe) 
            {
                if(recipe.Name == req.body.name)
                {
                    return recipe
                }

                else
                {
                    console.log("Not Matched")
                }
            }

                if(inspect != undefined)
                    {
                        res.send(inspect)
                    }
                else
                    {
                        res.sendStatus(500)
                    }
    });

module.exports = server;
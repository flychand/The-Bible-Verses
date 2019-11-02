var express = require('express')
var bodyParser = require('body-parser')
var request = require('request');
var app = express()

app.use(bodyParser.json());

app.post('/fetch-verses',(req,res)=>{

    var totalVerse = req.body.verses;
    var bibleVerse = [];
    
    if(totalVerse.length == 0){                
        res.send({code : "BAD_REQUEST" , message : "Invalid parameter"})
    } 
    else {
        totalVerse.map((data, k) => {

            var name = data.name;
            var chapter = data.chapter
            var verse = data.verse

        var data1 = {
            string : "["+name +" "+ chapter +":"+ verse+"]"
        }
        var output = {
            verse : null,
            description : null
        }
        // for invalid verses
        var invalid = {
            invalidverse:null,
            invalidDescription: null
        }
        //executing third party Api        
        request("https://bible-api.com/"+name +chapter+":"+verse+"?translation=kjv", function (error, response, body) {
            var verse = JSON.parse((body));
            
            if(verse.error !== "not found"){
                
                //verse found 
                output.verse = data1.string
                output.description = verse.text
                bibleVerse.push(output)
            } else{
                invalid.invalidverse = data1.string
                invalid.invalidDescription = "";
                bibleVerse.push(invalid)
            }

            if(bibleVerse.length == totalVerse.length ){
                res.send(bibleVerse)

            }
        });
            chapter = "";
            verse = "";
            name = "";
        })

    }
})


const port = 3005;
app.listen(port,(req,res) =>{
    console.log("server is running on ",`${port}`)
})

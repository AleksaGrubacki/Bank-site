const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
app.("/login.html",function(req,res){

})

app.listen("3000",function(){
    console.log("Server running on port 3000")
})
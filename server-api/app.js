const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
// Add headers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});





app.get('/hello-world', (req, res) => res.send('Hello World!'))

app.post('/api/register', function(req, res) {
    
    res.json('register User')
})


app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))
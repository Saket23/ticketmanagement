var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

app.get('/listTickets', function (req, res) {
   fs.readFile( __dirname + "/" + "tickets.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});





app.post('/addTickets', function (req, res) {
 console.log(req.body);
    //var parsedJson = JSON.parse(req.body);
fs.writeFile(__dirname + "/" + "tickets.json", JSON.stringify(req.body), function (err) {
  if (err) throw err;
  console.log('Replaced!');
});   
    res.json({
    response: 'a POST request for CREATING questions',
    body: req.body
  });
});

var server = app.listen(PORT, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
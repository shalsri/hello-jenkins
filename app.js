var express = require('express'); 
const port = 5000;
 
var app = express(); 
 
app.get('/', function (req, res) {

    console.log("inside route")
 
  res.send('hello world of jenkins yet again');
 
}); 
 
app.listen(port, () => console.log(`app listening on port ${port}!`));
 
module.exports = app;

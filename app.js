var express = require('express'); 
const port = 5000;
 
var app = express(); 
 
app.get('/test', function (req, res) {

    console.log("inside route")
 
  res.send('hello world of jenkins from webhook');
 
}); 
 
app.listen(port, () => console.log(`app listening on port ${port}!`));
 
module.exports = app;

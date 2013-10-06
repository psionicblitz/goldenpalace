var express = require("express");
var app = express();
app.use(express.logger());


//app.get('/', require('./modules/home.js'));
app.get('/', function(request, response) {
  //response.send('Hello World!!!');
  response.sendfile("blitz.html");
});

app.get('/blitz', function(request, response) {
  //response.send('Blitz!');
  response.sendfile("blitz.html");
});


// static assets
app.configure(function(){
  app.use('/assets', express.static(__dirname + '/assets'));
  app.use(express.static(__dirname + '/assets'));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



/*var pg = require('pg');

pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  client.query('SELECT * FROM your_table', function(err, result) {
    done();
    if(err) return console.error(err);
    console.log(result.rows);
  });
});*/
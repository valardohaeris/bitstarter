#!/usr/bin/env node

var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var buf = fs.readFileSync('index.html');
var ind = buf.toString('utf8',0,buf.length);


app.get('/', function(request, response) {
  response.send(ind);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

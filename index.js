const awsIot = require('aws-iot-device-sdk');
const fs = require('fs');
const http = require('http'); // Import HTTP module
const port = 8000;
const express = require('express');
const app = express();
const path = require ('path');
const bodyParser = require('body-parser');

app.set('view engine' , 'ejs');
app.set('views' , './views');
app.use (express.static('./assets'));                // Middleware to include CSS,JS, Images etc

app.use(express.urlencoded({}));                   // Parsing form data from URL - Middleware, not for URL 

// routing all the URLs to route index file i.e App should use this file for any URL
app.use('/', require('./routes/index'));

// Server start code
app.listen(port, function(err){
  if (err){
      console.log('Error in running the server ', err); return;
  }
  console.log('My server is running on port : ', port);
})
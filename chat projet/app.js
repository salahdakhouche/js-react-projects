const express = require('express');
const mysql = require('mysql');
const path = require('path');
const ejs = require('ejs');
const app = express();
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const { nextTick } = require('process');
const { query } = require('express');
const { error } = require('console');
const messageR = require('./routes/messageroute');
const authR = require('./routes/authroute');


// middlewares
app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'views')));
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended: false}));


// set a view engin to the applicaion for dynamic web pages
app.set('view engin','ejs');


//set routes
app.use(messageR);
app.use(authR);

//listen to a port
app.listen(8000);
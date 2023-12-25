const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const cookieparser = require('cookie-parser');
const indexroute = require('./routes/index');
const app = express();




app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(cookieparser());



app.use(indexroute);

app.listen(8000);
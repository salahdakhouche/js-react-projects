const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const main = require('./routes/main');
const product = require("./routes/products");
const parser = require('body-parser');


app.use(parser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/Views')));
app.set('View engin','ejs');
app.use(product);
app.use(main);
app.listen(3000);
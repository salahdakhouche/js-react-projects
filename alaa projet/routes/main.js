const {Router} = require('express');
const rout = Router();
const products = require('../db/products');


rout.get('/',(req,res)=>{
    res.render('main.ejs', {products});
});
module.exports = rout;
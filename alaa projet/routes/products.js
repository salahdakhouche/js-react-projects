const router = require("express");
const rout = router();
const products = require('../db/products');

rout.get('/product/:id',(req,res)=>{
    var id = parseInt(req.params.id);
    if(typeof id == "number" && req.params.id<=products.length)
    {
        res.render('products.ejs',{"product":products[id]});
    }
    else{ res.redirect('/');}
});

rout.get('/product',(req,res)=>{
    res.redirect('/');
});
module.exports = rout;
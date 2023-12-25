const { Router } = require("express");

const route = Router();

module.exports = route.get('/',(req,res)=>{
    res.cookie('mycok',"hi it's a cookie",{maxAge:360000,httponly:true});
    res.send('hi');
})

module.exports = route.get('/cookie',(req,res)=>{
    res.send(req.cookies.mycok);
});
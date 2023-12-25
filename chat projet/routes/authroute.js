const {Router} = require('express');
const auth = require('../controllers/authcontroller');
const rout = Router();



rout.post('/',auth.auth_sign);


rout.get('/',(req,res)=>{
res.render('index.ejs');
});

module.exports = rout;
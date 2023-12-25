const jwt = require('jsonwebtoken');

const authcheck = (req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token,'chat app secret',(err,decodedtoken)=>{
            if(err) res.redirect('/');
            else{
                req.body.email = decodedtoken.email;
                next();
            }
        });
    }else{
        res.redirect('/');
    }

}
module.exports = {authcheck};
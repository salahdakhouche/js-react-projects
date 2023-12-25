
const pool = require('../db/index');
const jwt = require('jsonwebtoken');
const { response } = require('express');


const creatTokens = (email)=>{
    return jwt.sign({email},'chat app secret',{
        expiresIn : 24*60*60 
    });
}

module.exports.auth_sign =(req,res) =>{
    if(req.body.inscription){
        pool.query('insert into users (email, name, password, created_at) values (?,?,?, now())',[req.body.insemail, req.body.insname+' '+req.body.inslastname, req.body.inspass],
        (error,results,fields)=>{
            if(error) res.status(400).json({'error':'email deja existant'});
            else {
                //res.redirect('/message'); 
                const token = creatTokens(req.body.insemail);
                res.cookie('jwt',token,{httponly:true,maxAge:24*60*60*1000});
                res.status(201).json({'email': req.body.insemail,'nom':req.body.insname});
                
                }
        });

    }

    if(req.body.connection){
        pool.query('select * from users where email = ? and password = ?',[req.body.connemail, req.body.connpasseword],
        (error,results,fields)=>{ //console.log(results.length);
            try {
                if(results.length>0){
                    const token = creatTokens(req.body.connemail);
                    res.cookie('jwt',token,{httponly:true, maxAge:24*60*60*1000});
                    res.status(201).json({'logged':'succes'});
                }
                else res.status(400).json({'logged':'email ou mot de passe incorrecte'});
                
            } catch (error) { console.log(error);
                
            }
            

        });
    }
}
const pool = require('../db/index');
// getting the messages in the database and send theem to the message page
module.exports.getmessage = (req,res) => {

    pool.query('SELECT * From message', function (error, results, fields) {
        if (error) throw error;
        //results = JSON.parse(JSON.stringify(results));
        //console.log('The solution is: ', Object.entries(results));
        res.locals.email = req.body.email;
        res.render('message.ejs',{res : Object.entries(results)});

      });
}


// adding a new message to the database and calling the get message route
module.exports.addmessage = (req,res)=>{

    pool.query('INSERT INTO message (email, message) values (?,?) ',[req.body.email,req.body.message],
    (error, results, fields)=> {
        if(error) {console.log(error);
            res.status(400).json(error);
        }
        else{
            res.status(200).json({'succes':'succes'});
        }

        
    })
}

module.exports.dbmessage = (req,res)=>{

    pool.query('SELECT * From message', function (error, results, fields) {
        if (error) throw error;
        results = JSON.parse(JSON.stringify(results));
        //console.log('The solution is: ', Object.entries(results));
        res.status(201).json({results});

      });

}
const { Router} = require('express');
const msg = require('../controllers/messagecontroller');
const { authcheck} = require('../middleware/authcheck');

const rout = Router();

rout.get('/message',authcheck,msg.getmessage);

rout.post('/addmessage',authcheck,msg.addmessage);

rout.get('/dbmessage',authcheck,msg.dbmessage);

module.exports = rout;

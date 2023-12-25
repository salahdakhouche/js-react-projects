
const mysql = require('mysql');

module.exports= pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'beq2jqbc1sy0ttikbrv8-mysql.services.clever-cloud.com',
    user            : 'uc1chph6j8vmkhsi',
    password       : 'd9XsFzbZgArtj0HvaTZb',
    database        : 'beq2jqbc1sy0ttikbrv8'
  });
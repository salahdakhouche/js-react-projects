const eventemit = require("http");


eventemit.createServer((request,response)=>{
response.writeHead(200, {'content-type':'Text/plain'});
response.write('hello world\n');
response.end();}).listen(1337);

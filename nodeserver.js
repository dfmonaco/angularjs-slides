/*
* requires connect : npm install connect
* fire up as node nodeserver.js
*/
var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(1234);

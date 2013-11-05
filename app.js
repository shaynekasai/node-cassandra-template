var server = require("./lib/server");
var router = require("./lib/router");
var test   = require("./lib/Test");

var objTest = new Test();

var handle = {}
handle['/db-read'] = objTest.exampleQuery;

server.start(router.route, handle);

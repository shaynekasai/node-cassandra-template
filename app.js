var server = require("./lib/server");
var router = require("./lib/router");
var test   = require("./lib/test");

var objTest = new test();

var handle = {}
handle['/db-read'] = objTest.exampleQuery;

server.start(router.route, handle);

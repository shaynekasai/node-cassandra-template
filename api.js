var restify = require('restify');
var Login   = require('./lib/Login');

var server = restify.createServer({
    name: 'API'
});
var objLogin = new Login();



function send(req, res, next) {
    //res.send('hello ' + req.params.name);
    res.send('hello world');
    return next();
}

server.get('/api/v1/get-token-test', objLogin.authTest); // dummy test

server.get('/api/v1/get-user:username', send);
server.post('/api/v1/update-user:username', send);
server.post('/api/v1/create-user:username', send);

server.listen(8080);

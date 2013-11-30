var restify = require('restify');

var server = restify.createServer({
    name: 'API'
});


function send(req, res, next) {
    //res.send('hello ' + req.params.name);
    return next();
}

server.get('/api/v1/get-user:username', send);
server.post('/api/v1/update-user:username', send);
server.post('/api/v1/create-user:username', send);

server.listen(8080);

var restify = require('restify');

var server = restify.createServer({
  name: 'API'
});


 function send(req, res, next) {
   res.send('hello ' + req.params.name);
   return next();
 }

 server.get('/hello/:name', send);


server.listen(8080);
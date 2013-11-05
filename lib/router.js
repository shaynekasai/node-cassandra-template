function route(handle, pathname, response, request) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    
    /* here we'll use a template engine to output 404 */

    response.writeHead(404, {"Content-Type": "text/html"});
    //response.write(content);
    response.end();
  }
}
exports.route = route;

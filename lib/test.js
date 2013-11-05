

 var helenus = require('helenus'),
      pool = new helenus.ConnectionPool({
        hosts      : ['localhost:9160'],
        keyspace   : 'example1:',
        timeout    : 3000
        //cqlVersion : '3.0.0' // specify this if you're using Cassandra 1.1 and want to use CQL 3
      });

 pool.on('error', function(err){
    console.error(err.name, err.message);
  });



function test() {

}

test.prototype.exampleQuery = function(response) {

  pool.connect(function(err, keyspace){
    if(err){
      throw(err);
    } else {

      pool.cql("SELECT * FROM  users",  function(err, results){
        console.log(err, results);
      });

      //NOTE:
      //- You can always skip quotes around placeholders, they are added automatically.
      //- In CQL 3 you cannot use placeholders for ColumnFamily names or Column names.
    }
  });



}

test.prototype.exampleWriteQuery = function(response) {
	console.log('exampleWriteQuery');
}

module.exports = test

function Login() {
    this.passport      = require('passport');
    this.LocalStrategy = require('passport-local').Strategy;
}

Login.prototype.authTest = function(req, res, next) {
    res.send('hello world');
}

Login.prototype.authToken = function(username, password) {
    
    this.passport.use(new this.LocalStrategy(
      function(username, password, done) {
          
        /*
        User.findOne({ username: username }, function(err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        });
        */
        
      }
    ));      
}

Login.prototype.logout = function() {
    
}

module.exports = Login;

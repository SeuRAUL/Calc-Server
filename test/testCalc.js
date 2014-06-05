before(function(done)) {
  // Lift Sails and store the app reference
  require('sails').lift({

    // turn down the log level so we can view the test results
    log: {
      level: 'error'
    },

  }, function(err, sails) {
       // export properties for upcoming tests with supertest.js
       sails.localAppURL = localAppURL = ( sails.usingSSL ? 'https' : 'http' ) + '://' + sails.config.host + ':' + sails.config.port + '';
       // save reference for teardown function
       done(err);
     });

});

var supertest = require("supertest")
var assert = require("assert");
var should = require("should");

describle('when requesting calcule only with first number', function() {

	it ('should return a error', function (done) {
		supertest(sails.express.app)
			.post('/calcule?number1=100')
			.expect('Content-Type',  /json/)
			.expect(400)
			.end(function(err,res) {
				assert.equal(res.status, 400);
				done();
		})
	})


})


after(function(done) {
	sails.lower(done);
});
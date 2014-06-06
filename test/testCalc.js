var Sails = require('sails');
var supertest = require("supertest");
var assert = require("assert");
var should = require("should");

var url = 'http://localhost:1337/calc';

// create a variable to hold the instantiated sails server
var app;

// Global before hook
before(function(done) {

    // Lift Sails and start the server
    Sails.lift({

        log: {
            level: 'error'
        },

    }, function(err, sails) {
        app = sails;
        done(err, sails);
    });
});



describe('when requesting calcule whithout all the parameters', function() {

	it ('should return status 400 passing only the first number', function (done) {
		supertest(url)
			.post('/calcule?number1=100')
			.expect('Content-Type',  "text/html; charset=utf-8")
			.expect(400)
			.end(function(err, res) {
				if(err) {throw err;}
				done();
		})
	})

	it ('should return status 400 passing only the numbers', function (done) {
		supertest(url)
			.post('/calcule?number1=100?number2=100')
			.expect('Content-Type',  "text/html; charset=utf-8")
			.expect(400)
			.end(function(err, res) {
				if(err) {throw err;}
				done();
		})
	})


})


describe('when passing all parameters', function() {

	it ('should return 803 as result of add 800 and 3', function (done) {
		supertest(url)
			.post('/calcule?number1=800&number2=3&operation=add')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				assert.equal(res.body, 803);
				done();
			})
	})

	it ('should return 150 as result of sub 200 and 50', function (done) {
		supertest(url)
			.post('/calcule?number1=200&number2=50&operation=sub')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				assert.equal(res.body, 150);
				done();
			})
	})

	it ('should return 150 as result of mlt 75 and 2', function (done) {
		supertest(url)
			.post('/calcule?number1=75&number2=2&operation=mlt')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				assert.equal(res.body, 150);
				done();
			})
	})

	it ('should return 150 as result of div 450 and 3', function (done) {
		supertest(url)
			.post('/calcule?number1=200&number2=50&operation=sub')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				assert.equal(res.body, 150);
				done();
			})
	})

	it ('should return 15.5 as result of div 31 and 2', function (done) {
		supertest(url)
			.post('/calcule?number1=31&number2=2&operation=div')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				assert.equal(res.body, 15.5);
				done();
			})
	})

})

after(function(done) {
    app.lower(done);
});
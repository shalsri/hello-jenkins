var request = require('supertest');
 
var app = require('../app.js');
 
 
 
describe('GET /', function() {
 
  it('respond with hello world of yet again', function(done) {
 
    request(app).get('/').expect('hello world of jenkins yet again', done);
 
  });
 
});

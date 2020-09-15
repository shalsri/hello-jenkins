var request = require('supertest');
 
var app = require('../app.js');
 
 
 
describe('GET /testroute', function() {
 
  it('respond with hello world of jenkins', function(done) {
 
    request(app).get('/testroute').expect('hello world of jenkins again', done);
 
  });
 
});

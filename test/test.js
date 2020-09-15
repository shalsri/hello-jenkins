var request = require('supertest');
 
var app = require('../app.js');
 
 
 
describe('GET /test', function() {
 
  it('respond with hello world of jenkins from webhook', function(done) {
 
    request(app).get('/test').expect('hello world of jenkins from webhook', done);
 
  });
 
});

var pubsub = require('./index.js');
var should = require('chai').expect;

describe('pubsub', function() {
  var response = false;
  beforeEach(function() {
    pubsub.on('view:action', function(obj) {
      if (typeof obj === 'object') {
        response = obj.action;
      }
    });
  });

  it('should respond to trigger event', function() {
    pubsub.trigger('view:action', {action: 'test'});
    should(response).to.equal('test');
  });
});
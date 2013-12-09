var openWindow = 'undefined' == typeof window
  ? require('..')
  : require('open-window'); // how to do this better?

var assert = require('assert');

describe('openWindow', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});

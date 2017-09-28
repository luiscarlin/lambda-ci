var chai = require('chai'),
  spies = require('chai-spies')
chai.use(spies)
var sinon = require('sinon')
var sinonChai = require('sinon-chai')
chai.use(sinonChai)
chai.should()
var expect = chai.expect
require('./spec_helper')

var underTest = require('..')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should contain particular text when the handler is called',
      function(done) {
        underTest.handler({}, {}, (error, result) => {
          expect(result.body).to.contain(
            "The time in Los Angeles is")
          done()
        })
      })
    it('should return time when the handler is called',
      function(done) {
        // replicate a DateTime object with setTimezone and toString
        var tz = sinon.stub()
        var spy = sinon.stub().returns({
          setTimezone: tz,
          toString: sinon.stub().returns('ATIME')
        })

        // inject ourselves into the module
        underTest.injectable.getDate = spy
          // call the actual function
        underTest.handler({}, {}, (error, result) => {
          // check timezone was called
          tz.should.have.been.calledWith("America/Los_Angeles")
            // check result has our injected value
          result.body.should.contain('ATIME')
            // test te st framework we done
          done()
        })
      })
  })
})
console.warn();

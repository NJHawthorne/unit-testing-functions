var expect = require('chai').expect;
var functions = require('../functions.js');

describe('fixProperNoun', function(){
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	});
	it('should throw an error if the argument is not a string', function() {
		expect(function() {functions.fixProperNoun(4)}).to.throw('Invalid Input');
	});
	it('should capitalize the first letter of the argument', function() {
		expect(functions.fixProperNoun('london').substr(0, 1)).to.equal('L');
	});
	it('should not capitalize the other letters of the argument', function() {
		expect(functions.fixProperNoun('LONDON').substr(1)).to.equal('ondon');
	})
});
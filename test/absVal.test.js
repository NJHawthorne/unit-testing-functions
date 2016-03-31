var expect = require('chai').expect;
var functions = require('../functions.js');

describe('absVal', function(){
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});
	it('should throw an error if the argument is not a number', function() {
		expect(function() {functions.absVal(isNaN)}).to.throw('Invalid Input');
	});
	it('should return a positive number if a positive number is entered', function() {
		expect(functions.absVal(5)).to.equal(5);
	});
	it('should return "0" if "0" is entered', function() {
		expect(functions.absVal(0)).to.equal(0);
	});
	it('should return a positive number if a negative number is entered', function() {
		expect(functions.absVal(-5)).to.equal(5);
	});
});
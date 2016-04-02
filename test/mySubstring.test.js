var expect = require('chai').expect;
var functions = require('../functions.js');

describe('mySubstring', function() {
	it('should exist', function() {
		expect(functions.mySubstring).not.to.be.undefined;
	});
	it('should throw an error if the first argument is not a string', function() {
		expect(function() {functions.mySubstring(4, 'abc', 'def')}).to.throw('Invalid Input');
	});
	it('should throw an error if the second argument is not a number', function() {
		expect(function() {functions.mySubstring(4, 'abc', 'def')}).to.throw('Invalid Input');
	});
	it('should throw an error if the third argument is not a number', function() {
		expect(function() {functions.mySubstring(4, 'abc', 'def')}).to.throw('Invalid Input');
	});
	it('should return a string', function() {
		expect(functions.mySubstring('abcdefg', 2, 6)).to.be.a('string');
	});
	it('should return "cdef" if "abcdefg" is passed through', function() {
		expect(functions.mySubstring('abcdefg', 2, 6)).to.equal('cdef');
	});
});
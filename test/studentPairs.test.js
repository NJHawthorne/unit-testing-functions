var expect = require('chai').expect;
var functions = require('../functions.js');

describe('studentPairs', function() {
	it('should exist', function() {
		expect(functions.studentPairs).not.to.be.undefined;
	});
	it('should throw an error if anything other than an array is passed through', function() {
		expect(function() {functions.studentPairs(5)}).to.throw('Invalid Input');
	});
	it('should throw an error if anything other than strings are inside the array', function() {
		expect(function() {functions.studentPairs([5, 6])}).to.throw('Invalid Input');
	});
	it('should throw an error if the length of the array is less than two', function() {
		expect(function() {functions.studentPairs(['nate'])}).to.throw('Invalid Input');
	});
	it('should return an array', function() {
		expect(functions.studentPairs(['noot', 'noooot', 'choo', 'choooo'])).to.be.an('array');
	});
});
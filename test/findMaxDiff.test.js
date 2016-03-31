var expect = require('chai').expect;
var functions = require('../functions.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(functions.findMaxDiff).not.to.be.undefined;
	});
	it('should throw an error if anything other than an array is passed through', function() {
		expect(function() {functions.findMaxDiff('abc')}).to.throw('Invalid Input');
	});
	it('should throw an error if the array contains anything other than a number', function() {
		expect(function() {functions.findMaxDiff(['abc', 5, 6])}).to.throw('Invalid Input');
	});
	it('should return a number', function() {
		expect(functions.findMaxDiff([3, 5, 7])).to.be.a('number');
	});
	it('should return 25 when an array of [5, 10, 15, 20, 25, 30] is passed through', function() {
		expect(functions.findMaxDiff([5, 10, 15, 20, 25, 30])).to.equal(25);
	});
});
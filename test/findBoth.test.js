var expect = require('chai').expect;
var functions = require('../functions.js');

describe('findBoth', function() {
	it('should exist', function() {
		expect(functions.findBoth).not.to.be.undefined;
	});
	it('should throw an error if the first argument is not an array', function() {
		expect(function() {functions.findBoth('abc', [1, 2, 3])}).to.throw('Invalid Input');
	});
	it('should throw an error if the second argument is not an array', function() {
		expect(function() {functions.findBoth([1, 2, 3], 'def')}).to.throw('Invalid Input');
	});
	it('should return an array', function() {
		expect(functions.findBoth([1, 2, 3], [2, 3, 4])).to.be.an('array');
	});
	it('should return an array of [2, 3] if [1, 2, 3] and [2, 3, 4] are passed through', function() {
		expect(functions.findBoth([1, 2, 3], [2, 3, 4])).to.deep.equal([2, 3]);
	});
	it('should return an array of [2, 3] if [1, 2, 3] and [2, 2, 3, 4]', function() {
		expect(functions.findBoth([1, 2, 3], [2, 2, 3, 4])).to.deep.equal([2, 3]);
	});
});
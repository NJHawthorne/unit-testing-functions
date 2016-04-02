var expect = require('chai').expect;
var functions = require('../functions.js');

describe('countBoth', function() {
	it('should exist', function() {
		expect(functions.countBoth).not.to.be.undefined;
	});
	it('should throw an error if the first argument is not an array', function() {
		expect(function() {functions.countBoth('abc', [1, 2, 3])}).to.throw('Invalid Input');
	});
	it('should throw an error if the second argument is not an array', function() {
		expect(function() {functions.countBoth([1, 2, 3], 'def')}).to.throw('Invalid Input');
	});
	it('should return an number', function() {
		expect(functions.countBoth([1, 2, 3], [2, 3, 4])).to.be.a('number');
	});
	it('should return an array of [2, 3] if [1, 2, 3] and [2, 3, 4] are passed through', function() {
		expect(functions.countBoth([1, 2, 3], [2, 3, 4])).to.equal(4);
	});
	it('should return 5 if [1, 2, 3] and [2, 2, 3, 4]', function() {
		expect(functions.countBoth([1, 2, 3], [2, 2, 3, 4])).to.equal(5);
	});
});
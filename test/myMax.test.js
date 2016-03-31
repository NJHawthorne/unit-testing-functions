var expect = require('chai').expect;
var functions = require('../functions.js');

describe('myMax', function(){
	it('should exist', function() {
		expect(functions.myMax).not.to.be.undefined;
	});
	it('should throw an error if the argument is not an array', function() {
		expect(function() {functions.myMax(6)}).to.throw('Invalid Input');
	});
	it('should return a number from the array', function() {
		expect(functions.myMax(['abc', 4, true])).to.equal(4);
	});
	it('should return the largest number in the array', function() {
		expect(functions.myMax([4, 8, 12])).to.equal(12);
	});
});
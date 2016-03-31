var expect = require('chai').expect;
var functions = require('../functions.js');

describe('myMin', function(){
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	});
	it('should throw an error if the first argument is not a number', function() {
		expect(function() {functions.myMin(isNaN)}).to.throw('Invalid Input');
	});
	it('should throw an error if the second argument is not a number', function() {
		expect(function() {functions.myMin(isNaN)}).to.throw('Invalid Input');
	});
	it('should return the first argument if the first argument is smaller', function() {
		expect(functions.myMin(6, 9)).to.equal(6);
	});
	it('should return the second argument if the second argument is smaller', function() {
		expect(functions.myMin(9, 6)).to.equal(6);
	});
});
var expect = require('chai').expect;
var functions = require('../functions.js');

describe('getMonth', function(){
	it('should exist', function() {
		expect(functions.getMonth).not.to.be.undefined;
	});
	it('should throw an error if the argument is not a number', function() {
		expect(function() {functions.getMonth(isNaN)}).to.throw('Invalid Input');
	});
	it('should return a string', function() {
		expect(functions.getMonth(5)).to.be.a('string');
	});
	it('should return a month depending the number that is inputted', function() {
		expect(functions.getMonth(5)).to.equal('May');
	});
	it('should throw an error if the argument does not match a month', function() {
		expect(function() {functions.getMonth(13)}).to.throw('Invalid Input');
	});
});
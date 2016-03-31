var expect = require('chai').expect;
var functions = require('../functions.js');

describe('checkData', function() {
	it('should exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});
	it('should throw an error if argument isn\'t a string', function() {
		expect(function() {functions.checkData(1)}).to.throw('Invalid Input');
	});
	it('should return true if the input is "abd"', function() {
		expect(functions.checkData('abd')).to.be.true;
	});
	it('should return false if the input is "awesome"', function() {
		expect(functions.checkData('awesome')).to.be.false;
	});
	it('should return false if the input is "a"', function() {
		expect(functions.checkData('a')).to.be.false;
	});
});
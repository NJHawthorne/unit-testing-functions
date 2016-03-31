var expect = require('chai').expect;
var functions = require('../functions.js');

describe('randomElement', function(){
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});
	it('should throw an error if the argument is not an array', function() {
		expect(function() {functions.randomElement(4)}).to.throw('Invalid Input');
	});
	it('should return a number if an array of numbers is passed through it', function() {
		expect(functions.randomElement([4, 6, 8])).to.be.a('number');
	});
	it('should return a string if an array of strings is passed through it', function() {
		expect(functions.randomElement(['a', 'b', 'c'])).to.be.a('string');
	});
});
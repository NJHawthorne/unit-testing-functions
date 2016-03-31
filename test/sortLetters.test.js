var expect = require('chai').expect;
var functions = require('../functions.js');

describe('sortLetters', function(){
	it('should exist', function() {
		expect(functions.sortLetters).not.to.be.undefined;
	});
	it('should throw an error if the argument is not a string', function() {
		expect(function() {functions.sortLetters(4)}).to.throw('Invalid Input');
	});
	it('should sort the string "cba" into "abc"', function() {
		expect(functions.sortLetters("cba")).to.equal("abc");
	});
	it('should return a string with only lowercase characters', function() {
		expect(functions.sortLetters('ABC')).to.equal('abc');
	});
});
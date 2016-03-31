var expect = require('chai').expect;
var functions = require('../functions.js');

describe('insertDashes', function() {
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});
	it('should throw an error if anything but a string is passed through', function() {
		expect(function() {functions.insertDashes(55)}).to.throw('Invalid Input');
	});
	it('should return a string', function() {
		expect(functions.insertDashes('noot noot')).to.be.a('string');
	});
	it('should return "n-o-o-t n-o-o-t" when the string "noot noot" is passed through', function() {
		expect(functions.insertDashes('noot noot')).to.equal('n-o-o-t n-o-o-t');
	});
});
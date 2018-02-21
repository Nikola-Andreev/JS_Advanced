let isOddOrEven = require('../code').isOddOrEven
let expect = require('chai').expect

describe("isOddOrEven", function() {
    it("with number parameter should return undefined", function() {
        expect(isOddOrEven(13)).to.be.equal(undefined,
        'function did not return the correct result!')
    })
    it("with object parameter should return undefined", function() {
        expect(isOddOrEven({niki:'poli'})).to.be.equal(undefined,
            'function did not return the correct result!')
    })
    it("with function parameter should return undefined", function() {
        expect(isOddOrEven(function (a) {
            return 'b'
        })).to.be.equal(undefined,
            'function did not return the correct result!')
    })
    it("with even length string parameter should return even", function() {
        expect(isOddOrEven('Miki')).to.be.equal('even',
            'function did not return the correct result!')
    })
    it("with odd length string parameter should return odd", function() {
        expect(isOddOrEven('Gonzo')).to.be.equal('odd',
            'function did not return the correct result!')
    })
    it("with odd length string parameter should return odd", function() {
        expect(isOddOrEven('abc')).to.be.equal('odd',
            'function did not return the correct result!')
    })
    it("with odd length string parameter should return odd", function() {
        expect(isOddOrEven('a')).to.be.equal('odd',
            'function did not return the correct result!')
    })
    it("with even length string parameter should return even", function() {
        expect(isOddOrEven('')).to.be.equal('even',
            'function did not return the correct result!')
    })
    it("with even length string parameter should return even", function() {
        expect(isOddOrEven('is it even')).to.be.equal('even',
            'function did not return the correct result!')
    })
})


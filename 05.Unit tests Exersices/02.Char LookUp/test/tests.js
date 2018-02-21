let lookupChar = require('../code').lookupChar
let expect = require('chai').expect

describe("lookupChar", function() {
    it("with a non string first parameter, should return undefined", function() {
        expect(lookupChar(13, 0)).to.be.equal(undefined,
        'The function did not return the correct result!')
    })
    it("with a non number second parameter, should return undefined", function() {
        expect(lookupChar('Niki', 'Niki')).to.be.equal(undefined,
            'The function did not return the correct result!')
    })
    it("with a floating point second parameter, should return undefined", function() {
        expect(lookupChar('Niki', 4.5)).to.be.equal(undefined,
            'The function did not return the correct result!')
    })
    it("with a incorrect index value, should return Incorrect index", function() {
        expect(lookupChar('Niki', 5)).to.be.equal("Incorrect index",
            'The function did not return the correct result!')
    })
    it("with a negative index value, should return Incorrect index", function() {
        expect(lookupChar('Niki', -1)).to.be.equal("Incorrect index",
            'The function did not return the correct result!')
    })
    it("with a index value equal to string length, should return Incorrect index", function() {
        expect(lookupChar('Niki', 4)).to.be.equal('Incorrect index',
            'The function did not return the correct result!')
    })
    it("with correct parameters, should return correct value", function() {
        expect(lookupChar('Niki', 1)).to.be.equal('i',
            'The function did not return the correct result!')
    })
    it("with correct parameters, should return correct value", function() {
        expect(lookupChar('Niki', 0)).to.be.equal('N',
            'The function did not return the correct result!')
    })
    it("with correct parameters, should return correct value", function() {
        expect(lookupChar('Niki', 3)).to.be.equal('i',
            'The function did not return the correct result!')
    })
})


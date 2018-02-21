let mathEnforcer = require('../code').mathEnforcer
let expect = require('chai').expect

describe("mathEnforcer", function() {
    describe('addFive', function () {
        it("with a non number parameter, should return undefined", function() {
            expect(mathEnforcer.addFive('Niki')).to.be.equal(undefined,
                'The function did not return the correct result!')
        })
        it("with a non number parameter, should return undefined", function() {
            expect(mathEnforcer.addFive({miki:'Niki'})).to.be.equal(undefined,
                'The function did not return the correct result!')
        })
        it("with a floating point parameter, should return correct result", function() {
            expect(mathEnforcer.addFive(3.5)).to.be.equal(8.5,
                'The function did not return the correct result!')
        })
        it("with a negative parameter, should return correct result", function() {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0,
                'The function did not return the correct result!')
        })
        it("with a negative floating point parameter, should return correct result", function() {
            expect(mathEnforcer.addFive(-5.66777)).to.be.equal(-0.66777,
                'The function did not return the correct result!')
        })
        it("with a normal parameter, should return correct result", function() {
            expect(mathEnforcer.addFive(0)).to.be.equal(5,
                'The function did not return the correct result!')
        })
    })
    describe('subtractTen', function () {
        it("with a non number parameter, should return undefined", function() {
            expect(mathEnforcer.subtractTen('Niki')).to.be.equal(undefined,
                'The function did not return the correct result!')
        })
        it("with a non number parameter, should return undefined", function() {
            expect(mathEnforcer.subtractTen({miki:'Niki'})).to.be.equal(undefined,
                'The function did not return the correct result!')
        })
        it("with a floating point parameter, should return correct result", function() {
            expect(mathEnforcer.subtractTen(3.5)).to.be.equal(-6.5,
                'The function did not return the correct result!')
        })
        it("with a negative parameter, should return correct result", function() {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15,
                'The function did not return the correct result!')
        })
        it("with a negative floating point parameter, should return correct result", function() {
            expect(mathEnforcer.subtractTen(-5.66777)).to.be.closeTo(-15.66777,0.1,
                'The function did not return the correct result!')
        })
        it("with a normal parameter, should return correct result", function() {
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10,
                'The function did not return the correct result!')
        })
    })
    describe('sum', function () {
        it("with a non number first parameter, should return undefined", function() {
            expect(mathEnforcer.sum('Niki',1)).to.be.equal(undefined,
                'The function did not return the correct result!')
        })
        it("with a non number second parameter, should return undefined", function() {
            expect(mathEnforcer.sum(1,'Niki')).to.be.equal(undefined,
                'The function did not return the correct result!')
        })
        it("with a non number first parameter, should return undefined", function() {
            expect(mathEnforcer.sum({miki:'Niki'},2)).to.be.equal(undefined,
                'The function did not return the correct result!')
        })
        it("with a non number second parameter, should return undefined", function() {
            expect(mathEnforcer.sum(2,{miki:'Niki'})).to.be.equal(undefined,
                'The function did not return the correct result!')
        })
        it("with a floating point parameter, should return correct result", function() {
            expect(mathEnforcer.sum(3.5,1)).to.be.closeTo(4.5,0.1,
                'The function did not return the correct result!')
        })
        it("with a floating point parameter, should return correct result", function() {
            expect(mathEnforcer.sum(3.5,1.6)).to.be.closeTo(5.1,0.1,
                'The function did not return the correct result!')
        })
        it("with a floating point parameter, should return correct result", function() {
            expect(mathEnforcer.sum(1,1.6)).to.be.closeTo(2.6,0.1,
                'The function did not return the correct result!')
        })
        it("with a negative parameter, should return correct result", function() {
            expect(mathEnforcer.sum(-5,-6)).to.be.equal(-11,
                'The function did not return the correct result!')
        })
        it("with a negative floating point parameter, should return correct result", function() {
            expect(mathEnforcer.sum(-5.66777,-1)).to.be.closeTo(-6.66777,0.1,
                'The function did not return the correct result!')
        })
        it("with a normal parameter, should return correct result", function() {
            expect(mathEnforcer.sum(0,1)).to.be.equal(1,
                'The function did not return the correct result!')
        })
        it("with a normal parameter, should return correct result", function() {
            expect(mathEnforcer.sum(11,1)).to.be.closeTo(12,0.1,
                'The function did not return the correct result!')
        })
    })
})


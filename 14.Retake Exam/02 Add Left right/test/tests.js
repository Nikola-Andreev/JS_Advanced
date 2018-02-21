let makeList = require('../code').makeList
let expect = require('chai').expect

describe("makeLIst", function() {
    let test
    beforeEach(function () {
        test = new makeList()
    })
    describe('addLeft', function () {
        it("should add correct", function() {
            test.addLeft('pesho')
            test.addLeft('gosho')
            test.addLeft('1')
            test.addLeft('2')
            expect(test.toString()).to.be.equal('2, 1, gosho, pesho')
        })
        it("should add correct", function() {
            test.addLeft('pesho')
            test.addLeft('gosho')
            test.addLeft(4)
            test.addLeft({miki:'Maus'})
            expect(test.toString()).to.be.equal('[object Object], 4, gosho, pesho')
        })
        it("should add correct", function() {
            test.addLeft('pesho')
            test.addLeft('gosho')
            test.addLeft(4)
            test.addLeft()
            expect(test.toString()).to.be.equal(', 4, gosho, pesho')
        })
    })
    describe('addRight', function () {
        it("should add correct", function() {
            test.addRight('pesho')
            test.addRight('gosho')
            test.addRight('1')
            test.addRight('2')
            expect(test.toString()).to.be.equal('pesho, gosho, 1, 2')
        })
        it("should add correct", function() {
            test.addRight('pesho')
            test.addRight('gosho')
            test.addRight(4)
            test.addRight({miki:'Maus'})
            expect(test.toString()).to.be.equal('pesho, gosho, 4, [object Object]')
        })
        it("should add correct", function() {
            test.addRight('pesho')
            test.addRight('gosho')
            test.addRight(4)
            test.addRight()
            expect(test.toString()).to.be.equal('pesho, gosho, 4, ')
        })
    })
    describe('clear', function () {
        it("should clear correct", function() {
            test.addRight('pesho')
            test.addRight('gosho')
            test.addRight('1')
            test.addRight('2')
            test.addLeft('pesho')
            test.addLeft('gosho')
            test.addLeft(4)
            test.addLeft()
            expect(test.toString()).to.be.equal(', 4, gosho, pesho, pesho, gosho, 1, 2')
            test.clear()
            expect(test.toString()).to.be.equal('')
        })
    })
})


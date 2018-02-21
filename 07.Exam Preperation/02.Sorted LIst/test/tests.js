let SortedList = require('../code').SortedList
let expect = require('chai').expect

describe("SortedList", function() {
    let test
    beforeEach(function () {
       test = new SortedList()
    })
    describe('add', function () {

        it("Checks function parameters ", function() {
            expect(typeof SortedList).to.be.equal('function', 'The function did not return the correct result!')
            expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true)
            expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true)
            expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true)
            expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true)
        })

        it("adds number to the list", function() {
            expect(test.size).to.be.equal(0)
        })

        it("adds number to the list", function() {
            test.add(5)
            expect(test.list[0]).to.be.equal(5, 'The function did not return the correct result!')
            expect(test.size).to.be.equal(1)
        })
        it("adds decimal number to the list", function() {
            test.add(5)
            test.add(5.5)
            expect(test.list[1]).to.be.equal(5.5, 'The function did not return the correct result!')
            expect(test.list[0]).to.be.equal(5, 'The function did not return the correct result!')
            expect(test.size).to.be.equal(2)
        })
        it("adds negative number to the list", function() {
            test.add(5)
            test.add(5.5)
            test.add(-5.5)
            expect(test.list[0]).to.be.equal(-5.5, 'The function did not return the correct result!')
            expect(test.list[1]).to.be.equal(5, 'The function did not return the correct result!')
            expect(test.list[2]).to.be.equal(5.5, 'The function did not return the correct result!')
            expect(test.size).to.be.equal(3)
        })
    })
    describe('remove', function () {
        it("removes number from list", function () {
            test.add(5)
            test.add(5.5)
            test.add(-5.5)
            test.remove(1)
            expect(test.size).to.be.equal(2, 'The function did not return the correct result!')
            expect(test.list[0]).to.be.equal(-5.5, 'The function did not return the correct result!')
            expect(test.list[1]).to.be.equal(5.5, 'The function did not return the correct result!')
        })
        it("with invalid position throws Error", function () {
             test.add(5)
             test.add(5.5)
             test.add(-5.5)
             test.remove(1)
             expect(()=> test.remove(-1)).to.throw(Error)
         })
        it("with invalid position throws Error", function () {
            expect(()=> test.remove(4)).to.throw(Error)
        })
    })
    describe('get', function () {
        it("returns the number for given index", function () {
            test.add(5)
            test.add(5.5)
            test.add(-5.5)
            test.remove(1)
            expect(test.size).to.be.equal(2, 'The function did not return the correct result!')
            expect(test.get(1)).to.be.equal(5.5, 'The function did not return the correct result!')
            expect(test.list[0]).to.be.equal(-5.5, 'The function did not return the correct result!')
            expect(test.list[1]).to.be.equal(5.5, 'The function did not return the correct result!')
        })
        it("returns the number for given index", function () {
            test.add(5)
            test.add(5.5)
            test.add(-5.5)
            test.add(11)
            test.remove(1)
            expect(test.size).to.be.equal(3, 'The function did not return the correct result!')
            expect(test.get(0)).to.be.equal(-5.5, 'The function did not return the correct result!')
            expect(test.list[0]).to.be.equal(-5.5, 'The function did not return the correct result!')
            expect(test.list[1]).to.be.equal(5.5, 'The function did not return the correct result!')
            expect(test.list[2]).to.be.equal(11, 'The function did not return the correct result!')
        })
        it("throw error for invalid index", function () {
            expect(()=>test.get(-1)).to.throw( Error)
        })
        it("throw error for invalid index", function () {
            expect(() => test.get(5)).to.throw( Error)
        })
    })
    describe('size', function () {
        it("returns the array size", function () {
            test.add(5)
            test.add(5.5)
            test.add(-5.5)
            test.remove(1)
            expect(test.size).to.be.equal(2, 'The function did not return the correct result!')
        })
    })
})


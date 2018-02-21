let a = require('../code').a
let expect = require('chai').expect

describe("SortedList", function() {
    let test
    beforeEach(function () {
        test = a();
    })
    describe('add', function () {
        it('should add correct', function () {
            expect(test.toString()).to.be.equal('')
            test.add('ab')
            test.add(5)
            expect(test.toString()).to.be.equal('ab, 5')
            test.add({miki: 'a'})
            expect(test.toString()).to.be.equal('ab, 5, [object Object]')
        })

    })
    describe('delete', function () {
        it('should delete correct', function () {
            expect(test.toString()).to.be.equal('')
            test.add('ab')
            test.add(5)
            expect(test.toString()).to.be.equal('ab, 5')
            test.add({miki: 'a'})
            test.delete(3)
            expect(test.delete(3)).to.be.equal(undefined)
            expect(test.toString()).to.be.equal('ab, 5, [object Object]')
            test.delete('2')
            expect(test.delete('2')).to.be.equal(undefined)
            expect(test.toString()).to.be.equal('ab, 5, [object Object]')
            test.delete(-1)
            expect(test.delete(-1)).to.be.equal(undefined)
            expect(test.toString()).to.be.equal('ab, 5, [object Object]')
            test.delete(2)
            expect(test.toString()).to.be.equal('ab, 5')
            expect(test.delete(1)).to.be.equal(5)
        })
        it('should not delete',function () {
            expect(test.delete(3)).to.be.equal(undefined)
            expect(test.delete(0)).to.be.equal(undefined)
            expect(test.toString()).to.be.equal('')
        })
    })
    describe('toString', function () {
        it('should be of type string', function () {
            expect(test.toString()).to.be.equal('')
            test.add('ab')
            test.add(5)
            expect(test.toString()).to.be.equal('ab, 5')
            expect(typeof test.toString()).to.be.equal('string')
        })

    })
})


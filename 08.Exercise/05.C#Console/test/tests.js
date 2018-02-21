let Console = require('../code').Console
let expect = require('chai').expect

describe("Console()", function() {
    it("return a string", function() {
        expect(Console.writeLine('miki')).to.be.equal('miki')
    })
    it("return undefined", function() {
        expect(Console.writeLine(50)).to.be.equal(undefined)
    })
    it("return a object to string", function() {
        expect(Console.writeLine({niki:'Poli'})).to.be.equal(JSON.stringify({niki:'Poli'}))
    })
    it("throws type error if first parameter is not a string", function () {
        expect(()=>Console.writeLine(20,10)).to.throw(TypeError)
    })
    it("throws type error if both parameter is a string", function () {
        expect(()=>Console.writeLine('ss','aa')).to.throw(TypeError)
    })
    it("throws type error if first parameter is object is a string", function () {
        expect(()=>Console.writeLine({niki:'Poli'},'aa')).to.throw(TypeError)
    })
    it("throws type error if first parameter is number is a string", function () {
        expect(()=>Console.writeLine(10,'aa')).to.throw(TypeError)
    })
    it("throws range error if number of parameters are more then placeholders", function () {
        expect(()=>Console.writeLine('Niki{0}',10,20)).to.throw(RangeError)
    })
    it("throws range error if number of parameters are less then placeholders", function () {
        expect(()=>Console.writeLine('Niki{0}{1}',20)).to.throw(RangeError)
    })
    it("throws range error if number of a placeholder is with too big number", function () {
        expect(()=>Console.writeLine('Niki{0}{13}',20,12)).to.throw(RangeError)
    })
    it("throws range error if number of a placeholder is with too small number", function () {
        expect(()=>Console.writeLine('Niki{-1}{1}',20,12)).to.throw(RangeError)
    })
    it("throws range error if number of a placeholder is with too big number", function () {
        expect(()=>Console.writeLine('Niki{0}{1}{13}',20,12,12)).to.throw(RangeError)
    })
    it("works correct", function () {
        expect(Console.writeLine('Niki{0}{1}{2}','20','12','12')).to.be.equal('Niki201212')
    })
    it("works correct", function () {
        expect(()=>Console.writeLine('Niki{0}{1}{2}{3}',20,12,12)).to.throw(RangeError)
    })
    it("works correct", function () {
        expect(()=>Console.writeLine('Niki{0}{1}',20,12,12)).to.throw(RangeError)
    })
    it("works correct", function () {
        expect(()=>Console.writeLine('Niki{1}{0}',20,12,12)).to.throw(RangeError)
    })
    it("works correct", function () {
        expect(()=>Console.writeLine('Niki{ala}{bala}',20,12,12)).to.throw(TypeError)
    })
    it("works correct", function () {
        expect(Console.writeLine('Niki{0}',20)).to.be.equal('Niki20')
    })
    it("works correct", function () {
        expect(Console.writeLine('Niki{0}')).to.be.equal('Niki{0}')
    })
    it("works correct", function () {
        expect(Console.writeLine('Niki{0}',{niki:'Poli'})).to.be.equal('Niki[object Object]')
    })
    it("works correct", function () {
        let a = 'a'
        expect(Console.writeLine('Niki{0}{1}{2}{3}{4}{5}{6}{7}{8}{9}',a,1,2,3,4,5,6,7,8,9)).to.be.equal('Nikia123456789')
    })
    it("works correct", function () {
        let a = 'a'
        expect(()=>Console.writeLine('Niki{1]{1}{2}{3}{4}{5}{6}{7}{8}{9}',a,1,2,3,4,5,6,7,8,9)).to.throw(RangeError)
    })
    it("works correct", function () {
        let a = 'a'
        expect(()=>Console.writeLine('Niki(0){1}{2}{3}{4}{5}{6}{7}{8}{9}',a,1,2,3,4,5,6,7,8,9)).to.throw(RangeError)
    })
    it("works correct", function () {
        let a = 'a'
        expect(()=>Console.writeLine('Niki{0.1}{1}',a,'b')).to.throw(RangeError)
    })
    it("works correct", function () {
        let a = 'a'
        expect(()=>Console.writeLine()).to.throw(TypeError)
    })
    it("return a string", function() {
        expect(Console.prototype.constructor.hasOwnProperty('writeLine')).to.be.equal(true)
    })
    it("works correct", function () {
        let a = 'a'
        expect(()=>Console.writeLine({Niki:'{0}'},a)).to.throw(TypeError)
    })
    it("should return error", function () {
        expect(()=>Console.writeLine('niki {12}','a')).to.throw(RangeError)
    })
})


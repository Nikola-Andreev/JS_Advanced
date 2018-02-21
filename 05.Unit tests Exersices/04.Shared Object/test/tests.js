let sharedObject = require('../code').sharedObject
let expect = require('chai').expect
this.jsdom = require('jsdom-global')()
global.$ = global.jQuery = require('jquery')

document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
    <title>Shared Object</title>
</head>
<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>
<script src="code.js"></script>
<script>
    sharedObject.changeName(-5)
    console.log(typeof $('#name').val())
</script>
</html>`

describe("sharedObject", function() {
    it("call with name parameter, should return null", function() {
        expect(sharedObject.name).to.be.equal(null,
            'The function did not return the correct result!')
    })
    it("call with income parameter, should return null", function() {
        expect(sharedObject.income).to.be.equal(null,
            'The function did not return the correct result!')
    })
    describe('changeName', function () {
        it("with a empty string parameter, should return null", function() {
            sharedObject.changeName('')
            expect(sharedObject.name).to.be.equal(null,
                'The function did not return the correct result!')
        })
        it("with invalid parameters and preexisting value, should return miki", function() {
            sharedObject.name = 'miki'
            sharedObject.changeName('')
            expect(sharedObject.name).to.be.equal('miki',
                'The function did not return the correct result!')
        })
        it("with invalid parameters and preexisting value, should return Ivan", function() {
            let name = $('#name')
            name.val('Ivan')
            sharedObject.changeName('')
            expect(name.val()).to.be.equal('Ivan',
                'The function did not return the correct result!')
        })
        it("with valid parameters , should return Poli", function() {
            sharedObject.changeName('Poli')
            expect(sharedObject.name).to.be.equal('Poli',
                'The function did not return the correct result!')
        })
        it("with valid parameters , should return Niki", function() {
            sharedObject.changeName('Niki')
            let name = $('#name')
            expect(name.val()).to.be.equal('Niki',
                'The function did not return the correct result!')
        })
    })
    describe('changeIncome', function () {
        it("with a object parameter, should not change", function() {
            sharedObject.income = 10
            sharedObject.changeIncome({name:'Niki'})
            expect(sharedObject.income).to.be.equal(10,
                'The function did not return the correct result!')
        })
        it("with a floating parameter, should not change", function() {
            sharedObject.income = 13
            sharedObject.changeIncome(5.5)
            expect(sharedObject.income).to.be.equal(13,
                'The function did not return the correct result!')
        })
        it("with a negative parameter, should not change", function() {
            sharedObject.income = 13
            sharedObject.changeIncome(-1)
            expect(sharedObject.income).to.be.equal(13,
                'The function did not return the correct result!')
        })
        it("with a zero parameter, should not change", function() {
            sharedObject.income = 13
            sharedObject.changeIncome(0)
            expect(sharedObject.income).to.be.equal(13,
                'The function did not return the correct result!')
        })
        it("with a valid parameter, should change income", function() {
            sharedObject.changeIncome(11)
            expect(sharedObject.income).to.be.equal(11,
                'The function did not return the correct result!')
        })

        it("with a object parameter, should not change", function() {
            let incomeBox = $('#income')
            incomeBox.val('5')
            sharedObject.changeIncome({name:'Niki'})
            expect(incomeBox.val()).to.be.equal('5',
                'The function did not return the correct result!')
        })
        it("with a floating parameter, should not change", function() {
            let incomeBox = $('#income')
            incomeBox.val('5')
            sharedObject.changeIncome(5.5)
            expect(incomeBox.val()).to.be.equal('5',
                'The function did not return the correct result!')
        })
        it("with a negative parameter, should not change", function() {
            let incomeBox = $('#income')
            incomeBox.val('5')
            sharedObject.changeIncome(-5)
            expect(incomeBox.val()).to.be.equal('5',
                'The function did not return the correct result!')
        })
        it("with a zero parameter, should not change", function() {
            let incomeBox = $('#income')
            incomeBox.val('5')
            sharedObject.changeIncome(0)
            expect(incomeBox.val()).to.be.equal('5',
                'The function did not return the correct result!')
        })
        it("with a valid parameter, should change income", function() {
            sharedObject.changeIncome(11)
            let incomeBox = $('#income')
            expect(incomeBox.val()).to.be.equal('11',
                'The function did not return the correct result!')
        })
    })
    describe('updateName', function () {
        it("with invalid parameter, should not change name", function() {
            sharedObject.name = 'test'
            let nameBox = $('#name')
            nameBox.val('')
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal('test',
                'The function did not return the correct result!')
        })
        it("with valid name, should change name", function() {
            let nameBox = $('#name')
            nameBox.val('test')
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal('test',
                'The function did not return the correct result!')
        })
    })
    describe('updateIncome', function () {
        it("with a invalid parameter, should not change income", function() {
            sharedObject.income = 55
            let incomeBox = $('#income')
            incomeBox.val('niki')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(55,
                'The function did not return the correct result!')
        })
        it("with a floating parameter, should not change income", function() {
            sharedObject.income = 55
            let incomeBox = $('#income')
            incomeBox.val('23.14')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(55,
                'The function did not return the correct result!')
        })
        it("with a negative parameter, should not change income", function() {
            sharedObject.income = 55
            let incomeBox = $('#income')
            incomeBox.val('-23')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(55,
                'The function did not return the correct result!')
        })
        it("with a empty string, should not change income", function() {
            sharedObject.income = 55
            let incomeBox = $('#income')
            incomeBox.val('')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(55,
                'The function did not return the correct result!')
        })
        it("with a valid string, should change income", function() {
            let incomeBox = $('#income')
            incomeBox.val(11)
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(11,
                'The function did not return the correct result!')
        })
    })
})


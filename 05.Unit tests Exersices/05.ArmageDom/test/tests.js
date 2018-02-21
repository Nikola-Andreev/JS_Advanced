let nuke = require('../code').nuke
let expect = require('chai').expect
this.jsdom = require('jsdom-global')()
global.$ = global.jQuery = require('jquery')

describe("nuke()", function() {

    beforeEach(function() {
        document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">
<script src="chai-jquery.js"></script>
<head>
    <meta charset="UTF-8">
    <title>ArmageDOM</title>
</head>
<body>
<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
</body>
</html>`})
    it("does nothing if one of the two selectors is not a string", function() {
        let body = $('body').html()
        nuke(5,'div')
        expect(body).to.be.equal($('body').html())
    })
    it("does nothing if pass only one parameter", function() {
        let body = $('body').html()
        nuke('div')
        expect(body).to.be.equal($('body').html())
    })
    it("does nothing if both of selectors is not a string", function() {
        let body = $('body').html()
        nuke(5,{a:5})
        expect(body).to.be.equal($('body').html())
    })
    it("does nothing if one of selectors is empty string", function() {
        let body = $('body').html()
        nuke('','div')
        expect(body).to.be.equal($('body').html())
    })
    it("does nothing if one of selectors is nonexistent", function() {
        let body = $('body').html()
        nuke('.nested','.dasdsadasd')
        expect($('.nested')).to.exists;
        expect($('.dasdsadasd').length).to.be.equal(0)
        expect(body).to.be.equal($('body').html())
    })
    it("does nothing if the two selectors are the same", function() {
        let body = $('body').html()
        nuke('.nested','.nested')
        expect(body).to.be.equal($('body').html())
    })

    it("deletes elements if the input is valid", function() {
        let target = $('#target div').length
        let inside = $('.target').length
        nuke('.target','div')
        expect($('#target div').length).to.be.equal(1)
        expect($('.target').length).to.be.equal(1)
    })
    it("deletes elements if the input is valid", function() {
        let target = $('.nested span').length
        let inside = $('.inside').length
        nuke('.nested','span')
        expect($('.nested span').length).to.be.equal(0)
        expect($('.inside span').length).to.be.equal(1)
        expect($('.target').length).to.not.equal(0)
    })
    it("deletes elements if the input is valid", function() {
        let target = $('.nested span').length
        let inside = $('.inside').length
        nuke('.nested','span')
        expect($('.nested span').length).to.be.equal(0)
        expect($('.inside span').length).to.be.equal(1)
        expect($('.target').length).to.not.equal(0)
    })
})


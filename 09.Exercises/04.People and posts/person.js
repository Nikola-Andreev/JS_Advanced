
class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    addToSelector(selector){
        let div = $(`<div class="person ${this.name}">`)
        let p = $('<p class="name">').text(this.name)
        let p2 = $('<p class="age">').text(this.age)
        let div2 = $(`<div class="posts ${this.name}">`)

        $(div).append(p).append(p2).append(div2)
        $(selector).append(div)
    }
}

module.exports = Person
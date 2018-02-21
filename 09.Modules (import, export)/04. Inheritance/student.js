let Person = require('./person')

class Student extends Person{
    constructor(name,phrase,Dog,id){
        super(name,phrase,Dog)
        this.name=name
        this.id = id
    }

    saySomething(){
        return `Id: ${this.id} ${this.name} says: ${this.phrase}${this.dog.name} barks!`
    }
}

module.exports = Student
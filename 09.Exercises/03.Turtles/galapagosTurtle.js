let Turtle = require('./turtle')

class GalapagosTurtle extends Turtle{
    constructor(name,age,gender){
        super(name,age,gender)
        this._thingsEaten = []
    }

    get thingsEaten(){
        return this._thingsEaten
    }

    eat(food){
        this._thingsEaten.push(food)
    }

    grow(year){
        super.grow(Number(year))
        this._thingsEaten = []
    }

    toString(){
        let str = super.toString()
        str+=`\nThings, eaten this year: `+this._thingsEaten.join(', ')
        return str
    }
}

module.exports = GalapagosTurtle

class Turtle{
    constructor(name,age,gender){
        if (new.target === Turtle) {
            throw new Error('Cannot instantiate directly.')
        }
        this._name = name
        this._age = age
        this._gender = gender
    }

    get name(){
        return this._name
    }

    get age(){
        return this._age
    }

    get gender(){
        return this._gender
    }

    grow(age){
        this._age += Number(age)
    }

    toString(){
       return `Turtle: ${this._name}
Aged - ${this._age}; Gender - ${this._gender}`
    }
}

module.exports = Turtle
let Turtle = require('./turtle')

class NinjaTurtle extends Turtle{
    constructor(name,age,gender,maskColor,weapon ){
        super(name,age,gender)
        this._maskColor = maskColor
        this._weapon = weapon
        this._level = 0
    }

    grow(age){
        super.grow(Number(age))
        this._level+=Number(age)
    }

    toString(){
        let str = super.toString();
        if(this._level < 25){
            str+=`\n${this._name.substr(0,3)} wears a ${this._maskColor} mask, and is an apprentice with the ${this._weapon}.`
        } else if(this._level < 100){
            str+=`\n${this._name.substr(0,3)} wears a ${this._maskColor} mask, and is smokin strong with the ${this._weapon}.`
        } else {
            str+=`\n${this._name.substr(0,3)} wears a ${this._maskColor} mask, and is BEYOND GODLIKE with the ${this._weapon}.`
        }
        return str
    }
}

module.exports = NinjaTurtle
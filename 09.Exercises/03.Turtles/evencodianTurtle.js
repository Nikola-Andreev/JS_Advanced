let Turtle = require('./turtle')

class EvkodianTurtle extends Turtle{
    constructor(name,age,gender,evkodiumValue){
        super(name,age,gender)
        this._evkodiumValue = Number(evkodiumValue)
    }

    get evkodium(){
        let obj= {value: Number(this._evkodiumValue)}
        if(this._gender == 'male'){
           obj.density = Number(this._age) * 3
        } else {
            obj.density = Number(this._age) * 2
        }
        return obj
    }

    toString(){
        let str = super.toString()
        str+=`\nEvkodium: ${Number(this._evkodiumValue) * Number(this.evkodium.density)}`
        return str
    }
}

module.exports = EvkodianTurtle
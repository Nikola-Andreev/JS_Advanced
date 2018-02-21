let Turtle = require('./turtle')

class WaterTurtle extends Turtle{
    constructor(name,age,gender,waterPool ){
        super(name,age,gender)
        this._waterPool = waterPool
    }

    get currentWaterPool(){
        return this._waterPool
    }

    travel(waterPool){
        this._waterPool = waterPool
        this.grow(5)
    }

    toString(){
        let str = super.toString()
        str+=`\nCurrently inhabiting ${this._waterPool}`
        return str
    }
}

module.exports = WaterTurtle

let a = new WaterTurtle("Shit", 20, "male", "Shit");
console.log(a.toString())
class Rat {
    constructor(name){
        this.name = name
        this.rats = []
    }

    unite(otherRat){
        if(otherRat.constructor === this.constructor){
            for (let attrname in otherRat) {
                this[attrname] = otherRat[attrname]
                this.rats.push(otherRat.name)
            }
        }
    }

    getRats(){
        return this.rats
    }

    toString(){
        let output = `${this.name}`
        for (let i = 0; i < this.rats.length; i++) {
            output += `\n##${this.rats[i].name}`
        }
      return output
    }
}

let r = new  Rat('Niki')
let a = new Rat('Poli')
let b = new Rat('Ivan')
r.unite(a)
r.unite(b)
console.log(r.getRats())
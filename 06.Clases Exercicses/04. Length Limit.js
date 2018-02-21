class Stringer {
    constructor(innerString,innerLength){
        this.innerString = innerString
        this.innerLength = innerLength
    }

    increase(length){
        this.innerLength += length
    }

    decrease(length){
        if(this.innerLength-length < 3){
            this.innerLength = 0
        } else {
            this.innerLength -= length
        }
    }

    toString() {
        if(this.innerLength == 0){
            return '...'
        }

        if(this.innerString.length > this.innerLength){
            let output = ''
            for (let i = 0; i < this.innerString.length; i++) {
                if (i < this.innerLength  ){
                    output += this.innerString[i]
                }
            }
            return output + '...'
        }

        return this.innerString
    }
}

let str = new Stringer('123456789',8)
console.log(str.toString())
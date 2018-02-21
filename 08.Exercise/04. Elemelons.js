//function solve() {

    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight
            this.melonSort = melonSort
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
        }

        get elementIndex() {
            return this.weight * this.melonSort.length
        }

        toString() {
            let str = this.constructor.name.substr(0, this.constructor.name.length - 5)
            return `Element: ${str}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
        }

        get elementIndex() {
            return this.weight * this.melonSort.length
        }

        toString() {
            let str = this.constructor.name.substr(0, this.constructor.name.length - 5)
            return `Element: ${str}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
        }

        get elementIndex() {
            return this.weight * this.melonSort.length
        }

        toString() {
            let str = this.constructor.name.substr(0, this.constructor.name.length - 5)
            return `Element: ${str}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
        }

        get elementIndex() {
            return this.weight * this.melonSort.length
        }

        toString() {
            let str = this.constructor.name.substr(0, this.constructor.name.length - 5)
            return `Element: ${str}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Melolemonmelon extends Watermelon {

        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.counter = 0
            this.arr = [Watermelon, Firemelon, Earthmelon,Airmelon]
        }

        morph() {
            this.toString = function () {
                return new this.arr[this.counter % 4](this.weight, this.melonSort).toString()
            };
            this.counter++
            return this;
        }

        toString() {
            let str = 'Water'
            return `Element: ${str}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    //return{Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon}

    let watermelon = new Melolemonmelon(12.5, "Kingsize");
    watermelon.morph()
    watermelon.morph()

    console.log(watermelon.toString());
//}

//let test = new Melon(100, "Test");
//Throws error





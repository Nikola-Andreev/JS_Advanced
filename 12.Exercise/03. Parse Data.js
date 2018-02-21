function makeCandy(arr) {

    class Candy{
        constructor(topping, filling, spice){
            this.topping = topping
            if(!filling=='') {
                this.filling = filling
            } else {
                this.filling = null
            }
            if(!spice=='') {
                this.spice = spice
            } else {
                this.spice = null
            }
        }
    }

    let output = []

    for (let i = 0; i < arr.length; i++) {

        let invalid = false

        let fillings = ['hazelnut', 'caramel', 'strawberry', 'blueberry', 'yogurt', 'fudge']
        let valid = arr[i].split(':')
        if(valid.length !== 3){
           continue
        }
        let topping = arr[i].split(':')[0]
        if(topping == undefined || (topping !== 'milk chocolate' && topping !== 'white chocolate' && topping !== 'dark chocolate' )){
            invalid = true
        }

        let filling = valid[1]
        let fil = filling.split(',')
        if(fil.length > 3){
            invalid = true
        }
        if(filling != ''){
            for (let j = 0; j < fil.length; j++) {
                if(fillings.indexOf(fil[j]) == -1 && fil[j] !== ''){
                    invalid = true
                }
            }
        }

        let spice = valid[2]
        if(spice == null || spice == 'poison' || spice == 'asbestos'){
            invalid = true
        }

        if(!invalid){
            let candy = new Candy(topping,filling,spice)
            output.push(candy)
        }
    }
    return output
}

console.log(makeCandy([
    'milk chocolate:hazelnut,caramel:pumpkin',
    'dark chocolate::chips',
    'white chocolate::poison',  // invalid
    'white chocolate:fudge:',
    'frosting:yogurt:frosting', // invalid
    'dark chocolate:blueberry:rock crystals',
    'dark chocolate:blueberry:'
]))

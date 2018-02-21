let main = (()=>{
    let obj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
}
    return (str) => {
        let operations = {
            apple: {carbs: 1, flavours: 2, fats: 0, proteins: 0},
            coke: {carbs: 10, flavours: 20, fats: 0, proteins: 0},
            burger: {carbs: 5, fats: 7, flavours: 3, proteins: 0},
            omelet: {proteins: 5, fats: 1, flavours: 1, carbs: 0},
            cheverme: {proteins: 10, carbs: 10, fats: 10, flavours: 10},
            restock: (a, quantity) => {
                obj[a] += quantity;
                return 'Success'
            },
            prepare: (a, quntity) => {
                if (obj.carbohydrate - operations[a].carbs * quntity < 0)
                    return "Error: not enough carbohydrate in stock"
                else if (obj.protein - operations[a].proteins * quntity < 0)
                    return "Error: not enough protein in stock"
                else if (obj.flavour - operations[a].flavours * quntity < 0)
                    return "Error: not enough flavour in stock"
                else if (obj.fat - operations[a].fats * quntity < 0)
                    return "Error: not enough fat in stock"
                obj.carbohydrate = Math.max(obj.carbohydrate - operations[a].carbs * quntity, 0)
                obj.protein = Math.max(obj.fat - operations[a].proteins * quntity, 0)
                obj.flavour = Math.max(obj.flavour - operations[a].flavours * quntity, 0)
                obj.fat = Math.max(obj.fat - operations[a].fats * quntity, 0)
                return "Success"
            },
            report: () => {
                return `protein=${obj.protein} carbohydrate=${obj.carbohydrate}
        fat=${obj.fat} flavour=${obj.flavour}`
            }
        };
        let [task, good, quantity] = str.split(' ');
        return operations[task](good, quantity);
    }
})();
console.log(main('restock carbohydrate 10'))
console.log(main('restock flavour 10'))
console.log(main('prepare apple 1'))
console.log(main('restock fat 10'))
console.log(main('prepare burger 1'))
console.log(main('report'))
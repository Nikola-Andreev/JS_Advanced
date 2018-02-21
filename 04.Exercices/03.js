function solve(obj) {

    let result = {}

    result.model = obj.model

    if(obj.power < 105){
        result.engine = {
            power: 90,
            volume: 1800
        }
    } else if (obj.power < 160){
        result.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        result.engine = {
            power: 200,
            volume: 3500
        }
    }

    result.carriage = {
        type: obj.carriage,
        color: obj.color
    }

    let wheelsArr = []
    if (obj.wheelsize %2 ==0) {
        for (let i = 0; i < 4; i++) {
            wheelsArr.push(obj.wheelsize -1)
        }
    } else {
        for (let i = 0; i < 4; i++) {
            wheelsArr.push(obj.wheelsize )
        }
    }

    result.wheels = wheelsArr

    return result
}

console.log(solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
))

console.log(solve({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
    )
)
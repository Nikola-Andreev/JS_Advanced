function mapSort(map, sortFn){
    let b = map
    if(sortFn !== undefined){

        let a = [];
        for(var x of b)
            a.push(x)

        a.sort(sortFn)
        let sorted = new Map(a)
        return sorted
    } else {

        let a = []
        for(var x of map)
            a.push(x)

        a.sort(function(x, y) {
            if(x[0] < y[0]) return -1
            else if(x[0] > y[0]) return 1
            else return 0;
        })

        let sorted = new Map(a)
        return sorted
    }
}

module.exports = mapSort


//New file

let mapSort = require('./helper-functions')

result.mapSort = mapSort

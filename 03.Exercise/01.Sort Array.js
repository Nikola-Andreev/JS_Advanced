function sortArray(arr,sortMethod) {

    let ascending = function (a,b) {
        return a - b
    }

    let descending = function (a,b) {
        return b - a
    }

    let sorting = {
        'asc': ascending,
        'desc': descending
    }

    return arr.sort(sorting[sortMethod])
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))
function makeIterable(obj) {

    function* arrayGenerator(arr) {
        for (let i = 0; i < arr.length ; i++) {
            yield arr[i]
        }
    }

    let arr = []
    for (let obj1 in obj) {
        arr.push(obj1)
    }

    arr = arr.sort( function(a,b) {
        return b.localeCompare(a)
    })

    let result = arrayGenerator(arr)
    return result
}

let obj = {name: "gosho", "13": true, book: "Lord of the Drinks", 2: 2, age: 15, passportNumber: 12345678};
let iterator = makeIterable(obj);
while(true){
    let res = iterator.next();
    if(res.done) break;
    console.log(res.value);
}


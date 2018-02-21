function aggregates(arr) {

    console.log('Sum = '+ reduce(arr, (a,b) => a + b))
    console.log('Min = '+ reduce(arr, (a,b) => Math.min(a,b)))
    console.log('Max = '+ reduce(arr, (a,b) => Math.max(a,b)))
    console.log('Product = '+ reduce(arr, (a,b) => a*b))
    console.log('Join = '+reduce(arr, (a,b) => a.toString()+b.toString()))

    function reduce(arr,func) {
        let num = arr[0]
        for (let number of arr.slice(1)) {
            num = func(num,number)
        }
        return num
    }
}

aggregates([5, -3, 20, 7, 0.5])

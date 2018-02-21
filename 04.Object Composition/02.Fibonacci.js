function fibonacci(num) {

    let fib =  (() => {
        let fib0 = 0
        let fib1 = 1
        return () =>{
            let oldf0 = fib0, oldf1 = fib1
            fib0 = oldf1
            fib1 = oldf0 + oldf1
            return oldf1
        }
    })()
    let fibNumbers = [];
    for (let i = 1; i <= num; i++)
        fibNumbers.push(fib());
    return fibNumbers;
}

console.log(fibonacci(10))
function add (n) {
    var v = function (x) {
        return add (n + x)
    }

    v.Map = function () {
        return n
    }

    return v
}

console.log(add(5)(4)(10)(-5).Map())
//console.log(+add(5))


function neshto() {
    function number (n){
        return n;
    }
    return number
}

console.log(neshto()(5))
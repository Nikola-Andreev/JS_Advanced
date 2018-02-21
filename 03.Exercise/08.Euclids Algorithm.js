function euclidus(a,b){
    let swap;
    while(b>0){
        swap=b;
        b=a%b;
        a=swap;
    }
    return a;
}

console.log(euclidus(252,105))

  function* fibonacci() {

      for(var fibArray = [1,1], i=1,j=1,k=0; k<10000;i=j,j=x,k++ ){
          x=i+j;
          fibArray.push(x);
      }

      for (let i = 0; i < fibArray.length; i++) {
          yield fibArray[i];
      }
    }


let fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
  console.log(fib.next().value);
  console.log(fib.next().value);
  console.log(fib.next().value);


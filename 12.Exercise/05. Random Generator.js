
function* random(num) {
    let seed = Number(num)
    while (true){
        seed = (seed * seed) % (4871 * 7919)
        yield seed % 100
    }
}

let rnd = random(100);

for (let i = 0; i < 10; i++) {
    console.log(rnd.next().value);
}

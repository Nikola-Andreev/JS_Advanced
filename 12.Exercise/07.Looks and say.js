function* lookAndSay(num) {

    let results = []

    function lookSay(digits) {
        let result = '',
            chars = (digits + ' ').split(''),
            lastChar = chars[0],
            times = 0;

        chars.forEach(function(nextChar) {
            if (nextChar === lastChar) {
                times++;
            }
            else {
                result += (times + '') + lastChar;
                lastChar = nextChar;
                times = 1;
            }
        });

        return result;
    }

    (function output(seed, iterations) {
        for (let i = 1; i < iterations; i++) {
            results.push(seed);
            seed = lookSay(seed);
        }
    })(num.toString(), 30);

    for (let i = 1; i < results.length; i++) {
        yield results[i];
    }
}

let lookSequence = lookAndSay(113);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);




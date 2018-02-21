function result() {

    let argsData = {}
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i]
        if(!(type in argsData)){
            argsData[type] = 1
        } else{
            argsData[type]++
        }
        console.log(type+': '+arguments[i] )
    }

    let output = {}
    let sortedKeys = Object.keys(argsData).sort((a,b)=>{
        return argsData[b]-argsData[a]
    })
    for (let i = 0; i < sortedKeys.length; i++) {
        output[sortedKeys[i]] = argsData[sortedKeys[i]]
    }

    for (let obj in output) {
        console.log(obj + ' = '+argsData[obj])
    }
}

//result('cat', 42, function () { console.log('Hello world!') })
result({ name: 'bob'}, 3.333, 9.999);
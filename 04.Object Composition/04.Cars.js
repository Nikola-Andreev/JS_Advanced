function createCar(commands){
    let map = new Map();
    let carManager = {
        create: function ([name, ,parent]) {
            parent = parent ? map.get(parent) : null;
            let newObj = Object.create(parent);
            map.set(name, newObj);
            return newObj;  },
        set: function ([name, key, value]) {
            let obj = map.get(name);
            obj[key] = value;  },
        print: function (name) {
            let obj = map.get(name[0]);
            let print = ''
            print+= Object.keys(obj).map((key)=>`${key}:${obj[key]}`).join(', ')
            let prototypes = Object.getPrototypeOf(obj)
            if(prototypes !== null && print !== '') {
                print += ', '+ Object.keys(prototypes).map((key)=>`${key}:${prototypes[key]}`).join(', ')
            } else if(prototypes !== null) {
                print += Object.keys(prototypes).map((key)=>`${key}:${prototypes[key]}`).join(', ')
                if(Object.getPrototypeOf(prototypes) !== null){
                    let prototypes2 = Object.getPrototypeOf(prototypes)
                    print+= ', '+Object.keys(prototypes2).map((key)=>`${key}:${prototypes2[key]}`).join(', ')
                }
            }
            console.log(print)
        }
    }

    for(let command of commands){
        let commandParameters = command.split(' ');
        let action = commandParameters.shift();
        carManager[action](commandParameters);
    }
}


//createCar(['create c1',
//    'create c2 inherit c1',
//    'set c1 color red',
//    'set c2 model new',
//    'print c1',
//    'print c2'])
createCar(
    ['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat']
)
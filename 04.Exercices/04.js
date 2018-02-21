function result() {

    let myObj = {}
    myObj.extend = function (template) {
        for (let a in template) {
            if( typeof template[a] == 'function'){
                Object.getPrototypeOf(myObj)[a]=template[a]
            } else {
                myObj[a] = template[a]
            }
        }
    }
    return myObj
}

//console.log(result({name :'Nikola'}))

var template = {
    extensionMethod: function () {
        console.log("From extension method")
    }
};

let test = result()
test.extend(template)
test.extensionMethod()
let a = (function() {

    let id = 0

    return  class  Extensible {
        constructor(){
            this.id = id++
        }
        extend(template){
            //myObj.extend = function (template) {
            for (let a in template) {
                if (typeof template[a] == 'function') {
                    Object.getPrototypeOf(this)[a] = template[a]
                } else {
                this[a] = template[a]
                }
            }
            //}
            //return myObj
        }
    }
}())
let obj1 = new a();
let obj2 = new a();
let obj3 = new a();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);



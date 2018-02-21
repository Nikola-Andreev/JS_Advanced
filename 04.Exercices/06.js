function result() {
    let arr = []
    return {
        add:function (element) {
            arr.push(element)
            this.size++
            return arr.sort((a,b) =>{
                return a - b
            })
        },
        remove:function (index) {
            if (arr.length > index && index >= 0) {
               arr.splice(index, 1)
                this.size--
            } else{
                throw new Error
            }
            return arr.sort((a,b) =>{
                return a - b
            })
        },
        get: function (index) {
            if(arr.length > index && index >= 0){
               return arr[index]
            } else {
                throw new Error
            }
        },
        size: 0
    }
}

let obj = result()
console.log(obj.add(-5))
console.log(obj.add(-3))
console.log(obj.add(-4))
console.log(obj.add(-100))
console.log(obj.add(-1))
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.remove(0))
//obj = result()
console.log(obj.add(3849999993247834))
console.log(obj.size)
console.log(obj.get(0))
console.log(obj.add(5))
console.log(obj.add(3))
console.log(obj.add(4))
console.log(obj.add(100))
console.log(obj.add(-1))
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.add(384932478324234))
console.log(obj.size)
console.log(obj.get(0))
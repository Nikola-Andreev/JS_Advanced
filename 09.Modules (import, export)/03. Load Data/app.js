let data = require('./file')

function sort(element){
    return data.sort((a,b) =>{
        return a[element].localeCompare(b[element])
    })
}

function filter(property,value) {
    return data.filter(a => a[property].indexOf(value) !== -1)
}

//console.log(sort('shipTo'))
//console.log(filter('status', 'delivered'))
result.sort = sort;
result.filter = filter;

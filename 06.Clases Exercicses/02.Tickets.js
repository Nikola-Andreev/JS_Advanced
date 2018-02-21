function solve(values,sort) {

    class Ticket {
        constructor(destination,price,status){
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    let output =[]

    for (let i = 0; i < values.length; i++) {
        let tokens = values[i].split('|')
        let ticket = new Ticket(tokens[0],Number(tokens[1]),tokens[2])
        output.push(ticket)
    }

    if (sort === 'destination') {
        output = output.sort((a, b) => {
            return a.destination.localeCompare(b.destination)
        })
    } else if (sort === 'status'){
        output = output.sort((a, b) => {
            return a.status.localeCompare(b.status)
        })
    } else {
        output = output.sort((a, b) => {
            return a.price - b.price
        })
    }

    return output
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'))
console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
))
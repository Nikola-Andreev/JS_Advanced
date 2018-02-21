
class CheckingAccount{
    constructor(clientId, email, firstName, lastName ){
        if(Number.isInteger(Number(clientId)) && Number(clientId) < 999999 && Number(clientId) > 100000){
            this.clientId = clientId
        } else {
            throw new TypeError('Client ID must be a 6-digit number')
        }

        if(email.match(/[a-zA-Z0-9]+@[a-zA-Z]+/g)){
            this.email = email
        } else {
            throw new TypeError('Invalid e-mail')
        }

        if(firstName.length <= 20 && firstName.length >= 3){
            if(firstName.match(/^[a-zA-Z]+$/g)){
                this.firstName = firstName
            } else {
                throw  new TypeError('First name must contain only Latin characters')
            }
        } else {
            throw new TypeError('First name must be between 3 and 20 characters long')
        }

        if(lastName.length <= 20 && lastName.length >= 3){
            if(lastName.match(/^[a-zA-Z]+$/g)){
                this.lastName = lastName
            } else {
                throw  new TypeError('Last name must contain only Latin characters')
            }
        } else {
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }
    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
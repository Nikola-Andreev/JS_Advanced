
class Branch{
    constructor(id,branchName,companyName){
        this._id = id
        this._branchName = branchName
        this._companyName = companyName
        this._employees = []
    }

    get employees(){
        return this._employees
    }

    hire(employee){
        this._employees.push(employee)
    }

    toString(){
       let str = `@ ${this._companyName}, ${this._branchName}, ${this._id}`
        str+=`\nEmployed:`
        if(this._employees.length > 0){
            for (let i = 0; i < this._employees.length; i++) {
                str+=`\n** ${this._employees[i]}`
            }
        } else {
            str+=`\nNone…`
        }
        return str
    }
}

module.exports = Branch
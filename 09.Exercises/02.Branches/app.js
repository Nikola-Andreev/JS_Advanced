let Branch = require('./branch')
let Employee = require('./employee')

result.Branch = Branch
result.Employee = Employee


/*let employee1 = new Employee("Peter Ivanov", 25, "Regular Worker");
let employee2 = new Employee("Ivan Peterov", 24, "Regular Worker");
let employee3 = new Employee("John Hissie", 21, "CEO");

console.log(employee3.toString());
// John Hissie, 21 (CEO)

let branch1 = new Branch(1, "Four Streets Branch", "Default INC.");
branch1.hire(employee1);
branch1.hire(employee2);
branch1.hire(employee3);
console.log(branch1.toString());
// Employed:
// ** Peter Ivanov, 25 (Regular Worker)
// ** Ivan Peterov, 24 (Regular Worker)
// ** John Hissie, 21 (CEO)*/
/*
let employee = new Employee("Peter Jackson", 33, "Senior Dev");
console.log(employee.toString())
/!*
expect(employee.toString()).to.be.equal(
    "Peter Jackson, 33 (Senior Dev)",
    "'Employee class' does not initialize correctly"
);*!/


let branch = new Branch(1, "Four Streets Avenue", "Insignia INC.");
console.log(branch.toString())
/!*expect(branch.toString()).to.be.equal(
    "@ Insignia INC., Four Streets Avenue, 1\n" +
    "Employed:\n" +
    "None...",
    "'Branch class' does not initialize correctly"
);*!/*/

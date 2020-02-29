// TODO: Write code to define and export the Employee class
const answers = require('../app')


console.log("answers in Employee.js", answers);

class Employee {
    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        this.name = answers.name
    }

    // getId() {

    // }

    // getEmail() {

    // }

    getRole() {
        return 'Employee'
    }
}

const bob = new Employee('bob', 001, 'bob@fakemail.com')

module.exports = Employee;

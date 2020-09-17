const Employee = require('Employee');

class Intern extends Employee {
    constructor(id, email, school) {
        this.school = school;
        super(id, email);
    }
}

module.exports = Intern;
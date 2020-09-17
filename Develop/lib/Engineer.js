const Employee = require('Employee');

class Engineer extends Employee {
    constructor(id, email, github) {
        this.github = github;
        super(id, email);
    }
}

module.exports = Engineer;
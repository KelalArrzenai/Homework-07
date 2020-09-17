const Employee = require('Employee');

class Manager extends Employee{
    constructor(id, email, offNum) {
        this.offNum = offNum;
        super(id, email)
    }    
}

module.exports = Manager;
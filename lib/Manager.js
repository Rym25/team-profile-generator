const Employee = require('./Employee');

class Manager extends Employee {
    constructor(data){
        super(data);
        this.ofNum = data.ofNum;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
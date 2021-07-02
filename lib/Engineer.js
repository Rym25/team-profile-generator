const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(data){
        super(data);
        this.gitUserName = data.gitUserName;
    }
}

module.exports = Engineer;
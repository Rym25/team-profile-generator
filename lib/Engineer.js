const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(data){
        super(data);
        this.gitUserName = data.gitUserName;
    }
    getGitHub() {
        return this.gitUserName;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
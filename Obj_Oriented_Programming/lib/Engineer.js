const Employee = require('./Employee');
const index = require('../index');


class Engineer extends Employee {
    constructor(employeeName, id, email, github) {
        super(employeeName, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;




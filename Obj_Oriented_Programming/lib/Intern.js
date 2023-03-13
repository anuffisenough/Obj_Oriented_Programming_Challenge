const Employee = require('./Employee');

class Intern extends Employee {
    constructor(employeeName, id, email, school) {
        super(employeeName, id, email)
        this.school = school;
    }

    getSchool() {}
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;
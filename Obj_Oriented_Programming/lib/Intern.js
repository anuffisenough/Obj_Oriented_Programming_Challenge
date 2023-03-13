const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {}
    super.getRole() {
        return 'Intern';
    }
}
const index = require('../index');

class Employee {
    constructor(employeeName, id, email) {
        this.EmployeeName = employeeName,
        this.id = id;
        this.email = email;
    }

    getName() {}
    getEmail() {}
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
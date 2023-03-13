const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    getGitHub() {}
    super.getRole() {
        return 'Engineer';
    }
}
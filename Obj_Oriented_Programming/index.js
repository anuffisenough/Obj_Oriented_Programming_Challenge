const inquirer = require("inquirer");
const fs = require("fs");
// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerQuestions = [
    {
        type: "input",
        message: "Please enter the Manager's name:",
        name: "managerName",
    },
    {
        type: "input",
        message: "Please enter the Manager's employee ID:",
        name: "managerId",
    },
    {
        type: "input",
        message: "Please enter the Manager's email address:",
        name: "managerEmailAddress",
    },
    {
        type: "input",
        message: "Please enter the Manager's office number:",
        name: "managerOfficeNumber",
    }];

const doNextQuestion = [
    {
        type: "list",
        message: "What would you like to do next?",
        name: "options",
        choices: ["Add an Engineer", "Add an Intern", "Finish Building Team"],
    }];

const engineerQuestions = [
    {
        type: "input",
        message: "Please enter the Engineer's name:",
        name: "engineerName",
    },
    {
        type: "input",
        message: "Please enter the Engineer's ID:",
        name: "engineerId",
    },
    {
        type: "input",
        message: "Please enter the Engineer's email address:",
        name: "engineerEmailAddress",
    },
    {
        type: "input",
        message: "Please enter the Engineer's GitHub username:",
        name: "engineerGitHub",
    }];

const internQuestions = [
    {
        type: "input",
        message: "Please enter the Intern's name:",
        name: "internName",
    },
    {
        type: "input",
        message: "Please enter the Intern's ID:",
        name: "internId",
    },
    {
        type: "input",
        message: "Please enter the Intern's email address:",
        name: "internEmailAddress",
    },
    {
        type: "input",
        message: "Please enter the Intern's school name:",
        name: "internSchool",
    }];

function askNextQuestion(){
    inquirer.prompt(doNextQuestion)
    .then((response) => {
        const result = response.options;
        switch(result) {
            case "Add an Engineer":
                inquirer.prompt(engineerQuestions)
                .then((response) => {
                    const engineer = new Engineer (response.engineerName, response.engineerId, response.engineerEmailAddress, response.engineerGitHub);
                    fs.appendFile('log.txt', `Engineer ${JSON.stringify(engineer)}\n`, (err) => (err));
                    askNextQuestion();
                });
                break;

                case "Add an Intern":
                    inquirer.prompt(internQuestions)
                    .then((response) => {
                    const intern = new Intern (response.internName, response.internId, response.internEmailAddress, response.internGitHub);
                    fs.appendFile('log.txt', `Intern ${JSON.stringify(intern)}\n`, (err) => (err));
                    askNextQuestion();
                });
                break;

            case "Finish Building Team":
                console.log("Let's see your team!");
            }});
};

function askQuestions() {
    inquirer.prompt(managerQuestions)
    .then((response) => {
            const manager = new Manager (response.managerName, response.managerId, response.managerEmailAddress, response.managerOfficeNumber);
            fs.writeFile('log.txt', `Manager ${JSON.stringify(manager)}\n`, (err) => (err));


    inquirer.prompt(doNextQuestion)
    .then((response) => {
        const result = response.options;
        switch(result) {
            case "Add an Engineer":
                inquirer.prompt(engineerQuestions)
                .then((response) => {
                    const engineer = new Engineer (response.engineerName, response.engineerId, response.engineerEmailAddress, response.engineerGitHub);
                    fs.appendFile('log.txt', `Engineer ${JSON.stringify(engineer)}\n`, (err) => (err));
                    askNextQuestion();
                });
                break;

                case "Add an Intern":
                    inquirer.prompt(internQuestions)
                    .then((response) => {
                    const intern = new Intern (response.internName, response.internId, response.internEmailAddress, response.internGitHub);
                    fs.appendFile('log.txt', `Intern ${JSON.stringify(intern)}\n`, (err) => (err));
                    askNextQuestion();
                });
                break;

            case "Finish Building Team":
                console.log("Let's see your team!");
}});
    })
};

askQuestions();



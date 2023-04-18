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
                            fs.appendFile('./dist/teamroster.html', `<div class="card">
                            <div class="card-header">${engineer.getRole()}\n${engineer.EmployeeName}</div>
                              <ul>
                                <li>ID:${engineer.id}</li>
                                <li>Email:<a href="mailto:${engineer.email}">${engineer.email}</li>
                                <li>GitHub:<a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</li>
                              </ul>
                            </div>`, (err) => (err));
                            askNextQuestion();
                        });
                        break;

                        case "Add an Intern":
                            inquirer.prompt(internQuestions)
                            .then((response) => {
                            const intern = new Intern (response.internName, response.internId, response.internEmailAddress, response.internGitHub);
                            fs.appendFile('./dist/teamroster.html', `<div class="card">
                            <div class="card-header">${intern.getRole()}\n${intern.EmployeeName}</div>
                              <ul>
                                <li>ID:${intern.id}</li>
                                <li>Email:<a href="mailto:${intern.email}">${intern.email}</li>
                                <li>School:${intern.getSchool()}</li>
                              </ul>
                            </div>`, (err) => (err));
                            askNextQuestion();
                        });
                        break;

            case "Finish Building Team":
                console.log("Let's see your team!");
                fs.appendFile('./dist/teamroster.html', `</div>`, (err) => (err));
            }});
};

function askQuestions() {
    inquirer.prompt(managerQuestions)
    .then((response) => {
            const manager = new Manager (response.managerName, response.managerId, response.managerEmailAddress, response.managerOfficeNumber);
            fs.writeFile('./dist/teamroster.html', `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <title>Team Roster</title>\n  <link rel="stylesheet" href="stylesheet.css" />\n</head>\n<h1>My Team</h1>\n<div class="flex-container">\n  <div class="card">\n  <div class="card-header">${manager.getRole()}\n${manager.EmployeeName}</div>\n  <ul>\n  <li>ID:${manager.id}</li>\n  <li>Email:<a href="mailto:${manager.email}">${manager.email}</li>\n  <li>${manager.officeNumber}</li>\n</ul>\n</div>\n`, (err) => (err));

    inquirer.prompt(doNextQuestion)
    .then((response) => {
        const result = response.options;
        switch(result) {
            case "Add an Engineer":
                inquirer.prompt(engineerQuestions)
                .then((response) => {
                    const engineer = new Engineer (response.engineerName, response.engineerId, response.engineerEmailAddress, response.engineerGitHub);
                    fs.appendFile('./dist/teamroster.html', `<div class="card">
                    <div class="card-header">${engineer.getRole()}\n${engineer.EmployeeName}</div>
                    <ul>
                    <li>ID:${engineer.id}</li>
                    <li>Email:<a href="mailto:${engineer.email}">${engineer.email}</li>
                    <li>GitHub:<a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</li>
                  </ul>
                    </div>`, (err) => (err));
                    askNextQuestion();
                });
                break;

                case "Add an Intern":
                    inquirer.prompt(internQuestions)
                    .then((response) => {
                    const intern = new Intern (response.internName, response.internId, response.internEmailAddress, response.internGitHub);
                    fs.appendFile('./dist/teamroster.html', `<div class="card">
                    <div class="card-header">${intern.getRole()}\n${intern.EmployeeName}</div>
                    <ul>
                    <li>ID:${intern.id}</li>
                    <li>Email:<a href="mailto:${intern.email}">${intern.email}</li>
                    <li>School:${intern.getSchool()}</li>
                  </ul>
                    </div>`, (err) => (err));
                    askNextQuestion();
                });
                break;

            case "Finish Building Team":
                console.log("Let's see your team!");
                fs.appendFile('./dist/teamroster.html', `</div>`, (err) => (err));
}});
    })
};

askQuestions();



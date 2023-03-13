const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const starterQuestions = [
    {
        type: "input",
        message: "Please enter your name:",
        name: "managerName",
    },
    {
        type: "input",
        message: "Please enter your employee ID:",
        name: "managerId",
    },
    {
        type: "input",
        message: "Please enter your email address:",
        name: "managerEmailAddress",
    },
    {
        type: "input",
        message: "Please enter your office number:",
        name: "managerOfficeNumber",
    },
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
    },
    starterQuestions[4]
];

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
    },
    starterQuestions[4]
];

inquirer
    .prompt(starterQuestions)
    .then((response) => {
        const manager = new Manager (response.managerName, response.managerId, response.managerEmailAddress, response.managerOfficeNumber);
                fs.writeFile('log.txt', `Manager ${JSON.stringify(manager)}\n`, (err) => (err))
        if(response.options === "Add an Engineer") {
            inquirer
            .prompt(engineerQuestions)
            .then((response) => {
                const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmailAddress, response.engineerGitHub);
                fs.appendFile('log.txt', `Engineer1 ${JSON.stringify(engineer)}\n`, (err) => (err))
                if(response.options === "Add an Engineer") {
                    inquirer
                    .prompt(engineerQuestions)
                } else if (response.options === "Add an Intern") {
                    inquirer
                    .prompt(internQuestions) 
                } else {
                    console.log("Let's look at your team")
                }
            })
        } else if (response.options === "Add an Intern") {
            inquirer
            .prompt(internQuestions)
                .then((response) => {
                    const intern = new Intern(response.internName, response.internId, response.internEmailAddress, response.internSchool);
                    fs.appendFile('log.txt', `Intern1 ${JSON.stringify(intern)}\n`, (err) => (err))
                if(response.options === "Add an Engineer") {
                    inquirer
                    .prompt(engineerQuestions)
                } else if (response.options === "Add an Intern") {
                    inquirer
                    .prompt(internQuestions) 
                } else {
                    console.log("Let's look at your team")
                }
            })
        } else {
            console.log("Let's look at your team")
        }
        // fs.writeFile("./dist/index.html",`<h1>${response.options}</h1>`, (err) =>
        // err ? console.error(err) : console.log("success!"))
    });


// inquirer
//     .prompt(starterQuestions[4])
//    .then((response) => {
//        if(response.options === "Add an Engineer") {
//            inquirer
//            .prompt(engineerQuestions)
//        } else if (response.options === "Add an Intern") {
//            inquirer
//            .prompt(internQuestions)
//        } else {
//            console.log("Let's look at your team")
//        }
//        // fs.writeFile("./dist/index.html",`<h1>${response.options}</h1>`, (err) =>
//        // err ? console.error(err) : console.log("success!"))
//    });


module.exports = inquirer;
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter your name:",
            name: "managerName",
        },
        {
            type: "input",
            message: "Please enter your employee ID:",
            name: "employeeId",
        },
        {
            type: "input",
            message: "Please enter your email address:",
            name: "emailAddress",
        },
        {
            type: "input",
            message: "Please enter your office number:",
            name: "officeNumber",
        },
        {
            type: "list",
            message: "What would you like to do next?",
            name: "options",
            choices: ["Add an Engineer", "Add an Intern", "Finish Building Team"],
        }
    ])
    .then((response) => 
        fs.writeFile("index.html",`<h1>${response.options}</h1>`, (err) =>
        err ? console.error(err) : console.log("success!"))
        );

module.exports = inquirer;
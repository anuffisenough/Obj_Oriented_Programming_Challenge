const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
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

function askManagerQuestions() {
    inquirer.prompt(managerQuestions)
    .then((managerQuestions) => {
            const manager = new Manager (managerQuestionsResponse.managerName, managerQuestionsResponse.managerId, managerQuestionsResponse.managerEmailAddress, managerQuestionsResponse.managerOfficeNumber);
                    fs.writeFile('log.txt', `Manager ${JSON.stringify(manager)}\n`, (err) => (err));
    });
};

function askEngineerQuestions() {
    inquirer.prompt(engineerQuestions)
    .then((engineerResponse) => {
        const engineer = new Engineer (engineerQuestionsResponse.engineerName, engineerQuestionsResponse.engineerId, engineerQuestionsResponse.engineerQuestionsEmailAddress, engineerQuestionsResponse.engineerGitHub);
        fs.appendFile('log.txt', `Engineer ${JSON.stringify(engineer)}\n`, (err) => (err));
});

function askInternQuestions() {
    inquirer.prompt(internQuestions)
    .then((internResponse) => {
        const intern = new Intern (internQuestionsResponse.engineerName, engineerResponse.engineerId, engineerResponse.engineerEmailAddress, engineerResponse.engineerGitHub);
        fs.appendFile('log.txt', `Engineer ${JSON.stringify(engineer)}\n`, (err) => (err));
});

function askNextQuestion() {
    inquirer.prompt(doNextQuestion)
    .then((response) => {
        const result = response.options;
        switch(result) {
            case "Add an Engineer":
                askEngineerQuestions();
            break;

            case "Add an Intern":
                askInternQuestions();
            break;

            case "Finish Building Team":
                console.log("Let's see your team!");
}});
};
// inquirer
//     .prompt(starterQuestions)
//     .then((managerQuestions) => {
//         const manager = new Manager (starterQuestionsResponse.managerName, starterQuestionsResponse.managerId, starterQuestionsResponse.managerEmailAddress, starterQuestionsResponse.managerOfficeNumber);
//                 fs.writeFile('log.txt', `Manager ${JSON.stringify(manager)}\n`, (err) => (err));
    if(starterQuestionsResponse.options === "Add an Engineer") {
        return inquirer.prompt(engineerQuestions).then((engineerResponse) => {
            const engineer = new Engineer (engineerResponse.engineerName, engineerResponse.engineerId, engineerResponse.engineerEmailAddress, engineerResponse.engineerGitHub);
            fs.appendFile('log.txt', `Engineer ${JSON.stringify(engineer)}\n`, (err) => (err));
        })
  //  } else if(starterQuestionsResponse.options === "Add an Intern") {
    //     return inquirer.prompt(internQuestions).then((internResponse) => {
    //         const intern = new Intern (internResponse.internName, internResponse.internId, internResponse.internEmailAddress, internResponse.internSchool);
    //         fs.appendFile('log.txt', `Intern ${JSON.stringify(intern)}\n`, (err) => (err));
        // })

// inquirer.prompt(starterQuestions[4])        
    }})
    




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
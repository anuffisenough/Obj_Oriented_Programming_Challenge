const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "Answer this first question",
            name: "first question",
        },
        {
            type: "input",
            message: "Answer this second question",
            name: "second question",
        },
        {
            type: "input",
            message: "Answer this third question",
            name: "third question",
        },
        {
            type: "input",
            message: "Answer this fourth question",
            name: "fourth question",
        },
    ])
    .then((response) => 
        response = console.log("this worked")
        );
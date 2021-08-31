const fs = require("fs");
const path = require("path"); //unused
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {   
        type: "input",
        name: "contact",
        message: "What is your email address?"
    },
    {   
        type: "input",
        name: "project",
        message: "What is your project's name?"
    },
    {   
        type: "input",
        name: "summary",
        message:  "Write a short description of your project"
    },
    {   
        type: "list",
        name: "license",
        message:  "What kind of license does your project require?",
        choices: ['None','MIT','Apache 2.0','GPL 3.0','BSD 3'],
    },
    {   
        type: "input",
        name: "dependencies",
        message:  "What is the command to install dependencies?"
    },
    {   
        type: "input",
        name: "testRun",
        message:  "What command should be run to run tests?"
    },
    {   
        type: "input",
        name: "repoUsage",
        message:  "What does the user need to know about using the repo"
    },
    {   
        type: "input",
        name: "contribution",
        message:   "What does the user need to know about contributing to the repo?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data); 
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
   .then((response) => {
            console.log("README is Ready for Preview.");
            writeToFile("README.md", generateMarkdown(response));
        })
}

// function call to initialize program
init(); 
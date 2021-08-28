const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is your email address?",
    "What is your project's name?",
    "Write a short description of your project",
    "What kind of license does your project require?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo",
    "What does the user need to know about contributing to the repo?"
];

// function to write README file
function writeToFile(fileName, data) {
    const filename = `${questions[1].toLowerCase().split(' ').join('')}.md`;
}

// function to initialize program
function init() {
    for (var i = 0; i < questions.length; i++){
        inquirer.prompt(questions[i]);
    }
}

// function call to initialize program
init();

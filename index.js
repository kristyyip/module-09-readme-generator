// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const {readFile, writeFile} = require("fs").promises;
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "user"
    }, 
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }, 
    {
        type: "input",
        message: "What is your project's name?",
        name: "projName"
    },
    {
        type: "input",
        message: "Please write a short description of your project:",
        name: "desc"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        // list most popular licenses src:  https://muratkaragozgil.medium.com/software-licenses-on-github-which-one-should-you-choose-3d4cfbb6c2f9#:~:text=The%20most%20popular%20software%20license,Apache%20License%202.0
        choices: ["Apache", "BSD 3", "GNU GPL v3", "MIT", "Mozilla"]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data)
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

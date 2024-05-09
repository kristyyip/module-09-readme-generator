// include packages needed for this application
const inquirer = require("inquirer");
const {writeFile} = require("fs").promises;
const generateMarkdown = require("./utils/generateMarkdown.js");

// an array of questions for user input (username, email, project title, description, license, installation, testing, usage, contributing)
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
        choices: ["Apache 2.0", "BSD 3-Clause", "GNU GPL v3", "MIT", "Mozilla Public License 2.0", "None"]
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

// a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data)
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

// a function to initialize app
// use inquirer to prompt user with questions from array, then use those user inputs to generate a README.md file
function init() {
    inquirer 
        .prompt(questions)
        .then((response) => writeFile("./assets/output/README.md", generateMarkdown(response)))
}

// Function call to initialize app
init();

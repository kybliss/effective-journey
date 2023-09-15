// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your application?',
        name: 'fileName'
    }, {
        type: 'input',
        message: 'What is your name?',
        name: 'programmerName'
    },
    {
        type: 'input',
        message: 'What does this application do? This program will...',
        name: 'fileUse'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'ghName'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
function writeToFile(response) {
    const stringifiedResponse = JSON.stringify(response, null, 2);
    fs.writeFile('data.json', stringifiedResponse, (err) => {
        err ? console.error(err) : console.log(`This application is called ${questions.fileName}, written by ${questions.programmerName}. This program will ${questions.fileUse}. I can be found on GitHub at github.com/${questions.ghName}, or reached at ${questions.email}.`)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(writeToFile)
}

// Function call to initialize app
init();

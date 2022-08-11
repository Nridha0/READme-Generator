//Include packages needed for this application

//Create an array of questions for user input

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
{ 
    type: 'input',
    name: 'title' ,
    message: ' What is the project title?',
},
{ 
    type: 'input',
    name: 'description',
    message: 'What are the sections of your project',
},
{ 
    type: 'input',
    name: 'installation',
    message: 'Can you provide the installation instruction for the project?',
},
{ 
    type: 'input' ,
    name: 'usage',
    message: 'Can you provide the usage instructions?',
},
{ 
    type: 'list',
    name: 'license',
    message: 'Can you select the license that you used for this project?',
    choices: [
        'none', 'Apache', 'MIT', 'GNU', 'mozilla'
    ]
},
{ 
    type: 'input',
    name: 'contribution',
    message: 'Can you descripe your contribution?',
},
{ 
    type: 'input',
    name: 'tests',
    message: 'Can you provide the test instructions?',
},
{ 
    type: 'input',
    name: 'userName',
    message: 'What is your GitHub username?',
},
{ 
    type: 'input',
    name: 'repo',
    message: 'What is your GitHub repo url?',
},
];


function writeToFile(fileName, data) {
fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("Success!");
});
}

// Function call to initialize app

function init() {
inquirer.prompt(questions).then(function (response) {
    console.log(response);
    writeToFile(`${response.title}.md`, response);
});
}


init() ;



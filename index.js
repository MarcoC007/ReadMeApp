// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');


// TODO: Create an array of questions for user input
const promptQuestions = () =>
 inquirer
.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your usarname Github?',
    },
    {
        type: 'input', 
        name: 'email',
        message: 'Please add your email adress',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does your project need to install?',
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project',
        choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What does your project need to be tested?',
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know how to use it?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: ''
    }


])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// TODO: Create a function to initialize app
function init() {
    promptQuestions().then((response) => {
    process.stdout.write('Readme is generating..');
    writeToFile('README.md', generateMarkdown({...response }));
    });

     }

// Function call to initialize app
init();


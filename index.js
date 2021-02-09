//Node  library package
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require ("./utils/generateMarkdown")

// array of questions for user
const questions = [{
    //get the title of the project
    type: "input",
    name: "title",
    message: "Title of your project?"

}, {
    //get desctiption of the project
    type: "input",
    name: "description",
    message: "Description of your project?"

},
{
    //get instruction for installing the project
    type: "input",
    name: "installation",
    message: "What are the instraction of installing your project?"
},
{
    //get usage information from the user
    type: "input",
    name: "usage",
    message: "What is the usage information of your project?"
},
{
    //prompt the user how can somebody contribuite to the project
    type: "input",
    name: "contributing",
    message: "How someone can make contributions to your project?"
},
{
    //get test instruction form the user
    type: "input",
    name: "tests",
    message: "What is the tesing instructions for your project?"
},
{
    // list a choise of licenses user can choose from
    type: "list",
    name: "license",
    massage: "What type of license for your project?",
    choices: ["MIT","Boost", "Apache", "Pearl"]
},

{
    //get  user github username
    type: 'input',
    name: 'name',
    message: 'What is your Github username?',
},
{
    //get user email address
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
    console.log("File REAME.md generated")
}

// function to initialize program 
function init() {
    inquirer.prompt(questions)
    .then(function(response) {
        writeToFile("README.md", generateMarkdown(response));
    })
}

// function call to initialize program
init();

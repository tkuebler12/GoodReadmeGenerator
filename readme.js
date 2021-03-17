var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path");
var createMarkdown = require("./utils/generateReadMe.js");

var questions = [
    {
        type: "input",
        name: "enterGitHubUsername",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "enterYourEmail",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "enterProjectName",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "enterDescription",
        message: "What is the description of your project?"
    },
    {
        type: "list",
        name: "License",
        message: "What is your license?",
        choices: ["MIT", "Apache", "GNU"]
    },
    {
        type: "input",
        name: "Installation",
        message: "How to install dependencies for the project"
    },
    {
        type: "input",
        name: "Usage",
        message: "What will the project be used for?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "What will your project contribute?"
    },
    {
        type: "input",
        name: "Tests",
        message: "How do you run tests for the project?"
    }
]

function promptQuestions(){
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
        writeResponse("README.md", createMarkdown({
            ...responses
        }));
    })
}
promptQuestions();

function writeResponse(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
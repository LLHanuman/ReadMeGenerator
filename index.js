const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

var questions = [{
        //   * Title
        type: "input",
        name: "Title",
        message: "What is your programs title?"
    },
    {
        //   * Description
        type: "input",
        name: "Description",
        message: "What is your project about?"
    }, {
        //   * Table of Contents
        type: "input",
        name: "ToC",
        message: "List your table of Contents."
    }, {
        //   * Installation
        type: "input",
        name: "Instructions",
        message: "What are the installation instructions? If none, list NA."
    }, {
        //   * Usage
        type: "input",
        name: "usage",
        message: "What is your program used for?"
    }, {
        //   * License
        type: "checkbox",
        name: "Licence",
        message: "Select your license",
        choices: ["Apache", "MIT", "ISC", "GNU GPLv3"],
    }, {
        //   * Contributing
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project?"
    }, {
        //   * Tests
        type: "input",
        name: "Tests",
        message: "Test instructions?"
    }, {
        //   * Questions
        type: "input",
        name: "Questions",
        message: "Any additional questions?"
    },
    {
        //   * Email
        type: "input",
        name: "Email",
        message: "Please enter your email"
    },
    {
        //   * Github
        type: "input",
        name: "Github",
        message: "Please enter your Github username"
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("README.md was created");
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);
    })
}

init();
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const gMUtil = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Please provide a brief description of your project:",
  "What are the steps required to install your project?",
  "Provide instructions and examples for use:",
  "List any contribution guidelines:",
  "Provide examples on how to run tests:",
  "Select which license you are using:",
  "Provide a link to your github:",
  "Provide your email:",
];

//Deconstructing the questions array into variables
const [
  title,
  desc,
  install,
  usage,
  contribution,
  test,
  license,
  github,
  email,
] = questions;

//Defining an array of license choices
const licenses = [
  "Apache",
  "Boost",
  "BSD 3-Clause",
  "CC0",
  "Eclipse",
  "GNU GPL v3",
  "The Hippocratic License 2.1",
  "IBM",
  "ISC",
  "MIT",
  "Mozilla",
  "Pearl",
  "SIL",
  "Zlib",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Write README file
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README file created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  // Prompt user for input
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: title,
      },
      {
        type: "input",
        name: "description",
        message: desc,
      },
      {
        type: "input",
        name: "installation",
        message: install,
      },
      {
        type: "input",
        name: "usage",
        message: usage,
      },
      {
        type: "input",
        name: "contributing",
        message: contribution,
      },
      {
        type: "input",
        name: "tests",
        message: test,
      },
      {
        type: "list",
        name: "license",
        message: license,
        choices: licenses,
      },
      {
        type: "input",
        name: "questions",
        message: github,
      },
      {
        type: "input",
        name: "email",
        message: email,
      },
    ])
    .then((answers) => {
      writeToFile("README.md", gMUtil(answers));
    });
}

// Function call to initialize app
init();

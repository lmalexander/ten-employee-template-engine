const inquirer = require("inquirer");
const jest = require("jest");

// prompt user for name, email, id, and school(intern) or github username(engineer and manager)
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
           type:  "input",
           name: "email",
           message: "What is your work-related email?"
        },
        {
            type: "list",
            name: "role",
            message: "What is your role at your company?",
            choices: ["manager", "engineer", "intern"]
        },
    ]) 
}
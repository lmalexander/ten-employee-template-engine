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
            message: "What is your title at your company?",
            choices: ["manager", "engineer", "intern"]
        },
        {
            type: "input",
            name: "internSchool",
            message: "Interns, please enter the name of your home university. Others, please enter null",
        },
        {
            type: "input",
            name: "github",
            message: "Engineers and managers, please enter your Github username. Interns, enter null."
        }
    ])
.then(answers => {
    // store variables with user employee data
    const name = answers.name;
    const email = answers.email;
    const role = answers.role;
    const internSchool = answers.internSchool;
    const github = answers.github;

    // console log var checks
    console.log(name);
    console.log(email);
    console.log(role);
    console.log(internSchool);
    console.log(github);
});
}




// function calls
promptUser();
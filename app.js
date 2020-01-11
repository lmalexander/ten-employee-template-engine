const inquirer = require("inquirer");
const jest = require("jest");

// prompt user for name, email, id, and school(intern) or github username(engineer and manager)
function promptUser() {
    return inquirer.prompt([
        { // 1
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        { // 2
            type: "input",
            name: "id",
            message: "What is your employee ID number?"
        },
        { // 3
            type: "list",
            name: "role",
            message: "What is your title at your company?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        { // 4
           type:  "input",
           name: "email",
           message: "What is your employee email?"
        },
        { // 5
            type: "input",
            name: "school",
            message: "Interns, please enter the name of your home university.",
            when: (data) => data.role === "Intern"
        },
        { // 6
            type: "input",
            name: "github",
            message: "Engineers, please enter your Github username.",
            when: (data) => data.role === "Engineer"
        }
    ])
.then(answers => { 
    // store variables with user employee data
    const name = answers.name;
    const id = answers.id;
    const email = answers.email;
    const role = answers.role;
    const school = answers.school;
    const github = answers.github;
    // console log variable checks
    console.log(name);
    console.log(id);
    console.log(email);
    console.log(role);
    console.log(school);
    console.log(github);
});
}
// dynamically create html using variables to be written to output/team.html
// function calls
promptUser();
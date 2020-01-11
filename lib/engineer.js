const Employee = require("./employee");

// engineer constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email); // base class
        this.github = github // new parameter
    }

    // new and changed methods
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
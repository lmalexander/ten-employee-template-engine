/*
The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * title
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'
*/

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
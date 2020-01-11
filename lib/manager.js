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

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'
*/

const Employee = require("./employee");

// manager constructor 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    // base class parameters    
        super(name, id, email);
    // new manager parameters 
        this.officeNumber = officeNumber;
    
    }

   // new and changed methods
   getOfficeNumber() {
       return this.officeNumber;
   }

   getRole() {
       return "Manager";
   }
}

module.exports = Manager;
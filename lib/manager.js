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
class Employee {
    // employee constructor (properties)
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // method: getName -- returns employee name 
    getName() {
        return this.name;
    }
 
    // method: getID -- returns an employee ID number
    getId() {
        return this.id;
    }

    // method: getEmail - returns user employee email
    getEmail() {
        return this.email;
    }

    // method: getRole - returns 'Employee'
    getRole() {
        return "Employee"; 
    }
}

module.exports = Employee;
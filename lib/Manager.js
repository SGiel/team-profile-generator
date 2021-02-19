const Employee = require('./Employee');

class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
      // call parent constructor here:
      super(employeeName, id, email);
    
      this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    };

  }

  module.exports = Manager;
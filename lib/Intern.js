const Employee = require('./Employee');

class Intern extends Employee {
    constructor(employeeName, id, email, school) {
      // call parent constructor here:
      super(employeeName, id, email);
      this.school = school;
    }

    getSchool() {
        return `${this.school}`;
    };

    getRole() {
        return 'Intern';
    };
  }

  module.exports = Intern;
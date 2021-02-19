const Employee = require('../lib/Employee.js');

test('creates an Employee', () => {
    const employee = new Employee('Dave', 1, 'dave@gmail.com');
  
    expect(employee.employeeName).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets Employee's name", () => {
    const employee = new Employee();
  
    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets Employee's email", () => {
    const employee = new Employee();
  
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets Employee's role", () => {
    const employee = new Employee();
  
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});

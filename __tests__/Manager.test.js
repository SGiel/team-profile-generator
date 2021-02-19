const Manager = require('../lib/Manager.js');

test('creates a Manager', () => {
    const manager = new Manager('Dave', '1', 'dave@gmail.com', '555-555-5555');
  
    expect(manager.employeeName).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(parseInt(manager.id)).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email).toMatch('@');
    expect(manager.email).toMatch('.');
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.officeNumber).toMatch('-');
});

test("gets Manager's name", () => {
    const manager = new Manager();
  
    expect(manager.getName()).toEqual(expect.any(String));
});

test("gets Manager's email", () => {
    const manager = new Manager();
  
    expect(manager.getEmail()).toEqual(expect.any(String));
});

test("gets Manager's role", () => {
    const manager = new Manager();
  
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});


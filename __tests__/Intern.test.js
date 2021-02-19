const Intern = require('../lib/Intern.js');

test('creates an Intern', () => {
    const intern = new Intern('Dave', '1', 'dave@gmail.com', 'UofA');
  
    expect(intern.employeeName).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(parseInt(intern.id)).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.email).toMatch('@');
    expect(intern.email).toMatch('.');

    expect(intern.school).toEqual(expect.any(String));
});

test("get Intern's name", () => {
    const intern = new Intern('Dave', '1', 'dave@gmail.com', 'UofA');
  
    expect(intern.getName()).toEqual(expect.any(String));
});

test("gets Intern's email", () => {
    const intern = new Intern('Dave', '1', 'dave@gmail.com', 'UofA');
  
    expect(intern.getEmail()).toEqual(expect.any(String));
});

test("gets Intern's role", () => {
    const intern = new Intern('Dave', '1', 'dave@gmail.com', 'UofA');
  
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test("gets Intern's school", () => {
    const intern = new Intern('Dave', '1', 'dave@gmail.com', 'UofA');
  
    expect(intern.getSchool()).toEqual(expect.any(String));
});

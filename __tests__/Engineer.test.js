const Engineer = require('../lib/Engineer.js');

test('creates an Engineer', () => {
    const engineer = new Engineer('Dave', '1', 'dave@gmail.com', 'Davehub');
  
    expect(engineer.employeeName).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(parseInt(engineer.id)).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email).toMatch('@');
    expect(engineer.email).toMatch('.');
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets Engineer's name", () => {

    const engineer = new Engineer('Dave', '1', 'dave@gmail.com', 'Davehub');
  
    expect(engineer.getName()).toEqual(expect.any(String));
});

test("gets Engineer's email", () => {
    const engineer = new Engineer('Dave', '1', 'dave@gmail.com', 'Davehub');

    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("gets Engineer's role", () => {

    const engineer = new Engineer('Dave', '1', 'dave@gmail.com', 'Davehub');
  
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test("gets Engineer's GitHub username", () => {

    const engineer = new Engineer('Dave', '1', 'dave@gmail.com', 'Davehub');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

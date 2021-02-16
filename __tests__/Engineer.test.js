test('creates an Engineer', () => {
    const engineer = new Engineer();
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets Engineer's name", () => {
    const egineer = new Engineer();
  
    expect(engineer.getName()).toEqual(expect.any(String));
});

test("gets Engineer's email", () => {
    const egineer = new Engineer();
  
    expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
});

test("gets Engineer's role", () => {
    const egineer = new Engineer();
  
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test("gets Engineer's GitHub username", () => {
    const egineer = new Engineer();
  
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

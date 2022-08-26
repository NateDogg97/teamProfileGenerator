const Intern = require('../lib/Intern');

test("The fourth parameter should store the Intern's school", () => {
    const school = "UT Austin";
    const obj = new Intern("Stan", 12, "sample@sample.com", school);

    expect(obj.school).toEqual("UT Austin");
});

test("The getEmail method should return the Intern's email", () => {
    const school = "UT Austin";
    const obj = new Intern("Stan", 12, "sample@sample.com", school);

    expect(obj.getSchool()).toEqual("UT Austin");
});

test("The getRole method should return 'Intern'", () => {
    const obj = new Intern();

    expect(obj.getRole()).toEqual("Intern");
});
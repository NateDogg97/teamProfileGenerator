const Manager = require('../lib/Manager');

test("The fourth parameter should store the Manager's office number", () => {
    const office = 101;
    const obj = new Manager("Stan", 12, "sample@sample.com", office);

    expect(obj.officeNumber).toEqual(101);
});

test("The getEmail method should return the Manager's email", () => {
    const office = 101;
    const obj = new Manager("Stan", 12, "sample@sample.com", office);

    expect(obj.getOfficeNumber()).toEqual(101);
});

test("The getRole method should return 'Manager'", () => {
    const obj = new Manager();

    expect(obj.getRole()).toEqual("Manager");
});
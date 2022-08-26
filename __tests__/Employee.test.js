const Employee = require('../lib/Employee');


    test("Should be an object", () => {
        const obj = new Employee();

        expect(typeof(obj)).toEqual("object");
    });

    test("The first parameter should return the employee's name", () => {
        const name = "Stan";
        const obj = new Employee(name);

        expect(obj.name).toEqual("Stan");
    });

    test("The second parameter should return their id", () => {
        const name = "Stan";
        const id = 12;
        const obj = new Employee(name, id);

        expect(obj.id).toEqual(12);
    });

    test("The third parameter should be the employee's email", () => {
        const name = "Stan";
        const id = 12;
        const email = 'sample@sample.com';
        const obj = new Employee(name, id, email);

        expect(obj.email).toEqual("sample@sample.com");
    });

    test("The getName() method should return the employee's name", () => {
        const name = "Stan";
        const obj = new Employee(name);

        expect(obj.getName()).toEqual("Stan");
    });

    test("The getId method should return the employee's id", () => {
        const name = "Stan";
        const id = 12;
        const obj = new Employee(name, id);

        expect(obj.getId()).toEqual(12);
    });

    test("The getEmail method should return the employee's email", () => {
        const name = "Stan";
        const id = 12;
        const email = "sample@sample.com";
        const obj = new Employee(name, id, email);

        expect(obj.getEmail()).toEqual("sample@sample.com");
    });

    test("The getRole method should return 'Employee'", () => {
        const obj = new Employee();

        expect(obj.getRole()).toEqual("Employee");
    });

const Engineer = require('../lib/Engineer');

test("The fourth parameter should store the Engineer's GitHub username", () => {
    const github = "coderzRcool";
    const obj = new Engineer("Stan", 12, "sample@sample.com", github);

    expect(obj.github).toEqual("coderzRcool");
});

test("The getGithub method should return the Engineer's Gitub username", () => {
    const github = "coderzRcool";
    const obj = new Engineer("Stan", 12, "sample@sample.com", github);

    expect(obj.getGithub()).toEqual("coderzRcool");
});

test("The getRole method should return 'Engineer'", () => {
    const obj = new Engineer();

    expect(obj.getRole()).toEqual("Engineer");
});
const Engineer = require("../lib/Engineer");

test("creates a github link", () => {
    const githubTester = "Dave30";
    const employeeExample = new Engineer("Dave", "Dave30", "Dave30@fakemail.com", githubTester);
    expect(employeeExample.github).toBe(githubTester);
});

test("creates a github link", () => {
    const githubTester = "Dave30";
    const employeeExample = new Engineer("Dave", "Dave30", "Dave30@fakemail.com", githubTester);
    expect(employeeExample.getGithub()).toBe(githubTester);
});

test("getRole method example", () => {
    const testgetRole = "Engineer";
    const employeeExample = new Engineer("Dave", "Dave30", "Dave30@fakemail.com", "Dave30");
    expect(employeeExample.getRole()).toBe(testgetRole);
});
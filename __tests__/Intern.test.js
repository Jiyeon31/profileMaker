const Intern = require("../lib/Intern");

test("creates a school.", () => {
    const schoolTester = "NFU";
    const employeeExample = new Intern("Dave", "Dave30", "Dave30@fakemail.com", schoolTester);
    expect(employeeExample.school).toBe(schoolTester); 
});

test("returns a school value.", () => {
    const schoolTester = "NFU";
    const employeeExample = new Intern("Dave", "Dave30", "Dave30@fakemail.com", schoolTester);
    expect(employeeExample.getSchool()).toBe(schoolTester); 
});

test("tests getRole().", () => {
    const testgetRole = "Intern";
    const employeeExample = new Intern("Dave", "Dave30", "Dave30@fakemail.com", "NFU");
    expect(employeeExample.getRole()).toBe(testgetRole); 
});
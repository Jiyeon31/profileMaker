const Manager = require('../lib/Manager');

test("creates an office number", () => {
    const officenumTester = '1';
    const employeeExample = new Manager("Dave", "Dave30", "Dave30@fakemail.com", officenumTester);
    expect(employeeExample.officeNumber).toBe(officenumTester);
});

test("returns an office number", () => {
    const officenumTester = '1';
    const employeeExample = new Manager("Dave", "Dave30", "Dave30@fakemail.com", officenumTester);
    expect(employeeExample.getOfficeNumber()).toBe(officenumTester);
});


test("tests getRole().", () => {
    const testgetRole = "Manager";
    const employeeExample = new Manager("Dave", "Dave30", "Dave30@fakemail.com", "1");
    expect(employeeExample.getRole()).toBe(testgetRole); 
});
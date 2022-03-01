const Employee = require('../lib/Employee');

test("creates a new employee", () => {
    const employeeExample = new Employee();
    expect(typeof(employeeExample)).toBe("object");
});

test("name example", () => {
    const name = "Dave";
    const employeeExample = new Employee(name);
    expect(employeeExample.name).toBe(name);
})

test("id example", () => {
    const id = "Dave30";
    const employeeExample = new Employee("Dave", id);
    expect(employeeExample.id).toBe(id);
})

test("email example", () => {
    const email = "Dave30@fakemail.com";
    const employeeExample = new Employee("Dave", "Dave30", email);
    expect(employeeExample.email).toBe(email);
})

test("getName method example", () => {
    const testgetName = "Dave";
    const employeeExample = new Employee(testgetName);
    expect(employeeExample.getName()).toBe(testgetName);
})

test("getId method example", () => {
    const testgetId = "Dave30";
    const employeeExample = new Employee("Dave", testgetId);
    expect(employeeExample.getId()).toBe(testgetId);
})

test("getEmail method example", () => {
    const testgetEmail = "Dave30@fakemail.com";
    const employeeExample = new Employee("Dave", "Dave30", testgetEmail);
    expect(employeeExample.getEmail()).toBe(testgetEmail);
})

test("getRole method example", () => {
    const testgetRole = "Employee";
    const employeeExample = new Employee("Dave", "Dave30", "Dave30@fakemail.com", testgetRole);
    expect(employeeExample.getRole()).toBe(testgetRole);
})
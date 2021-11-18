const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typof(employee)).toBe("object");
});

test('set Employee name', () => {
    const name = "Emmanuel"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('set ID', () => {
    const testId = 3090;
    const employee = new Employee("Emmanuel", testId);
    expect(employee.id).toBe(testId);
});

test('set Email', () => {
    const testEmail = "emmanuel.dejene@jinka.com"
    const employee = new Employee("Emmanuel", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});

test('getName from getName', () => {
    const testName = 'Emmanuel';
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test('get ID from getID', () => {
    const testId = 3090;
    const employee = new Employee('Emmanuel', testId);
    expect(employee.getId()).toBe(testId);
});

test('get email from getEmail', () => {
    const email = "emmanuel.dejene@jinka.com"
    const employee = new Employee('Employee', 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test('get role from getRole', () => {
    const testRole = "Employee"
    const employee = new Employee("Emmanuel", 1, "emmanuel.dejene@jinka.com");
    expect(employee.getRole()).toBe(testRole);
});
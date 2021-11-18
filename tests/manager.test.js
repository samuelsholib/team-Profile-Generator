const Manager = require("../lib/Manager");

test("setting an office number", () => {
    const testValue = "4254675362";
    const employee = new Manager("Emmanuel", 1, "emmanuel.dejene@jinka.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test("get Role function", () => {
    const testValue = "Manager";
    const employee = new Manager("Emmanuel", 1, "emmanuel.dejene@jinka.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});
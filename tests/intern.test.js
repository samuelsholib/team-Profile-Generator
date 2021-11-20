const Intern = require("../lib/Intern");

test("setting school via constructor", () => {
    const testValue = "University of Washington"
    const employee = new Intern("Emmanuel", 1, "emmanuel.dejene@jinka.com", testValue);
    expect(employee.school).toBe(testValue);
});

test("getSchool", () => {
    const testValue = "University of Washington Seattle"
    const employee = new Intern("Emmanuel", 1, "emmanuel.dejene@jinka.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});

test("get role function", () => {
    const testValue = "Intern";
    const employee = new Intern("Emmanuel", 1, "emmanuel.dejene@jinka.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});
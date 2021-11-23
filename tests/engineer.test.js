const Engineer = require('../lib/Engineer');

test("setting up github via constructor", () => {
    const testValue = "samuelsholib";
    const employee = new Engineer("Emmanuel", 1, "emmanuel.dejene@jinka.com", testValue);
    expect(employee.github).toBe(testValue);

});

test("getGithub", () => {
    const testValue = "samuelsholib"
    const employee = new Engineer("Emmanuel", 1, "emmanuel.dejene@jinka.com", testValue);
    expect(employee.getGithub()).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Emmanuel", 1, "emmanuel.dejene@jinka.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});
const Employee = require("./Employee");


class Engineer extends Employee {

    constructor(name, id, email, github) {
        this.github = github;
        this.title = Engineer;
    }
    getGithub() {
        this.github
    }
}
module.exports = Engineer;
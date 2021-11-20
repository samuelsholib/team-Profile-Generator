const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const jest = require('jest');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const html = require("./Src/getHtml");
const finalHtml = require("./dist/index.html");


const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

// Function to run the application
async function generateHTML() {
    try {
        await prompt()

        for (let i = 0; i < teamArray.length; i++) {
            teamString = teamString + html.generateCard(teamArray[i]);
        }

        let finalHtml = html.generateHTML(teamString)

        console.clear();
        console.log("---------------------------------------------");
        writeFileAsync("./dist/index.html", finalHtml);

    } catch (err) {
        return console.log(err);
    }
}

//  prompted inquirer questions

async function prompt() {
    let responseDone = "";

    do {
        try {
            console.log("---------------------------------------------");
            let response = await inquirer.prompt([{
                    type: "input",
                    message: "What is employee's name?",
                    name: "name",
                    validate: function validateName(name) {
                        return name !== "";
                    },
                },

                {
                    type: "list",
                    message: "what is the employee's role?",
                    name: "role",
                    choices: [
                        "Manager",
                        "Engineer",
                        "Intern",
                    ]
                }
            ]);

            let response2 = ""

            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([

                    {
                        type: "input",
                        message: "what is Engineers email adress:",
                        name: "email",
                        validate: function validateName(name) {
                            return name !== "";
                        }
                    },
                    {
                        type: "input",
                        message: " Enter engineer's ID:",
                        name: "id",
                        validate: function validateName(name) {

                            return name !== "";
                        }
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is engineers github username?: ",
                        validate: function validateName(name) {
                            return name !== "";
                        }

                    },
                ]);


                // add to team Arr
                const engineer = new Engineer(response.name, response.id, response.email, response2);
                teamArray.push(engineer);

            } else if (response.role === "Manager") {
                response2 = await inquirer.prompt([{
                        type: "input",
                        name: "email",
                        message: "What is the managers email adress? ",
                        validate: function validateName(name) {
                            return name !== "";
                        },
                    },
                    {
                        type: "input",
                        message: " Enter managers ID:",
                        name: "id",
                        validate: function validateName(name) {
                            return name !== "";
                        }
                    },
                    {
                        type: "input",
                        name: "number",
                        message: "What is the managers office number? ",
                        validate: function validateName(name) {
                            return name !== "";
                        }
                    },
                ]);

                // add to team Arr
                const manager = new Manager(response.name, response.id, response.email, response2.x);
                teamArray.push(manager);

            } else if (response.role === "Intern") {
                response2 = await inquirer.prompt([{
                        type: "input",
                        name: "email",
                        message: "What is the intern's email adress? ",
                        validate: function validateName(name) {
                            return name !== "";
                        }
                    },
                    {
                        type: "input",
                        message: " Enter interns ID:",
                        name: "id",
                        validate: function validateName(name) {
                            return name !== "";
                        }
                    },

                    {
                        type: "input",
                        name: "school",
                        message: "What school does the intern attend?",
                        validate: function validateName(name) {
                            return name !== "";
                        },
                    },
                ]);

                // add to team Arr
                const intern = new Intern(response.name, response.id, response.email, response2.x);
                teamArray.push(intern);
            }
        } catch (err) {
            return console.log(err);
        }
        responseDone = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Do you want to add an other employee?",
            choices: [
                "Yes",
                "No"
            ]
        }, ]);
    } while (responseDone.finish === "Yes");
}
// initiate the program
generateHTML();
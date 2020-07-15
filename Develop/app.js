// Other JS files required
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// npm requirements
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


// output
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// how to render
const render = require("./lib/htmlRenderer");

// where to add new members
const newMembers = [];


// add manager to team
function managerInfo (){

    inquirer
        .prompt ([
            {
                type: "input",
                name: "manName",
                message: "manager name?"
            }
            {
                type: "input",
                name: "manID",
                message: "manager id?"
            }
            {
                type: "input",
                name: "manEmail",
                message: "manager email?"
            }
            {
                type: "input",
                name: "manOffice",
                message: "manager office number?"
            }
        ])
        .then(manAnswers => {
            var {manName, manID, manEmail, manOffice } = manAnswers;
            var manager = Manager(manName, manID, manEmail, manOffice);

            newMembers.push(manager);
            newTeam();



        })
}

function  newTeam (){
    inquirer
        .prompt([
        {
            type: "list",
            name: "command",
            message: "add team memeber?"
            choices: ["Engineer", "Intern", "Manager", "Create Team"]
        }

    ])
    .then(memAnswers => {
        switch(statement){
            case "Engineer":
                newEngineer();
                break;
            
            case "Intern":
                newIntern();
                break;
            
            case "Manager":
                managerInfo ();
                break;

            case "Create Team"; 
                createTeam();
                break;

        }
    }

    )
}

function newEngineer(){}

function newIntern(){}

// will this work? 
managerInfo()

function createTeam(){}

managerInfo()

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

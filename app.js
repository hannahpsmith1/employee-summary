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

// to add n numbers of team members
function newMember() {
    inquirer.prompt([
        {
        type:"list",
        message: "What kind of employee are you adding?",
        name: "createdEmployee",
        choices: ["Manager", "Engineer", "Intern", "Done"]
        },
    ])
    .then(teamMember => {
        switch(teamMember.createdEmployee) {
            case "Engineer":
                engineer();
                break;
            case "Manager":
                manager();
                break;
            case "Intern":
                intern();
                break;
            case "Done":
                createTeam();
                break;
        }
    })

}


// add manager to team
function managerInfo (){

    inquirer
        .prompt ([
            {
                type: "input",
                name: "manName",
                message: "manager name?"
            },
            {
                type: "input",
                name: "manID",
                message: "manager id?"
            },
            {
                type: "input",
                name: "manEmail",
                message: "manager email?"
            },
            {
                type: "input",
                name: "manOffice",
                message: "manager office number?"
            }
        ])
        .then(function(reponse) {
            var manName = reponse.manName;
            var manID = response.manID;
            var manEmail = reponse.manEmail;
            var manOffice = response.manEamil;



            var manager = new Manager (
                manName,
                manID,
                manEmail,
                manOffice
            );

// changed after learning about sub classes
            // var {manName, manID, manEmail, manOffice } = manAnswers;
            // var manager = Manager(manName, manID, manEmail, manOffice);

            newMembers.push(manager);
            newTeam();



        })
}

// would you like to add a team member
function  newTeam (){
    // running inquierer in node
    inquirer
        .prompt([
        {
            type: "list",
            name: "command",
            message: "add team memeber?",
            options: ["Engineer", "Intern", "Create Team"]
        }

    ])
    // options for statement.  what role would someone select?
    .then(memAnswers => {
        switch(statement){
            case "Engineer":
                newEngineer();
                break;
            
            case "Intern":
                newIntern();
                break;
            
                // should I add this for multiple managers? 
            // case "Manager":
            //     managerInfo ();
            //     break;

            case "Create Team": 
                createTeam();
                break;

        }
    }

    )
}


// If new engineer sleected
function newEngineer(){
    inquirer
    .prompt ([
        {
            type: "input",
            name: "name",
            message: "engineer name?"
        },
        {
            type: "input",
            name: "iD",
            message: "engineer id?"
        },
        {
            type: "input",
            name: "email",
            message: "engineer email?"
        },
        {
            type: "input",
            name: "github",
            message: "engineer github?"
        }
    ])
    .then(engAnswers => {
        var { name, id, email, github} = engAnswers;
        var engineer = Engineer(name, email, github);
        createTeam.push(engineer);
        }

    )


}

// If new Intern is selected
function newIntern(){
    inquirer
    .prompt ([
        {
            type: "input",
            name: "name",
            message: "intern name?"
        },
        {
            type: "input",
            name: "iD",
            message: "intern id?"
        },
        {
            type: "input",
            name: "email",
            message: "intern email?"
        },
        {
            type: "input",
            name: "school",
            message: "intern school?"
        }
    ])
    .then(intAnswers =>{
        var {name, id, email, school} = intAnswers;
        var intern = Intern(name, id, email, school);

    })

}

// will this work? 
// managerInfo()

// to create where 
function createTeam(){
    fs.writeFileSync(outputPath, mainRender(newMember), "utf-8");
}

// managerInfo()
console.log("tada")
const Employee = require("./lib/Employee");

console.log(new Employee("joe"))
console.log(new Employee("martha"))
// let abc = {}
// let def = abc 

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

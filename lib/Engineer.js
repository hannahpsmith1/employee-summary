// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// here we would eitherrrrr write code to define an engineer and export to app.js or it would be defined in app.js and need to be exported here where we would write to the html

const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        super (name, id, email)
        this.github = github;
    }

    getGithub (){
        return this.github;

    }    
    getRole (){
        return "Engineer";

    }
}
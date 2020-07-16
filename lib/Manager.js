// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// employee is the parent for some amount of classes then specific manager definition to be inhereited from app.js (input)

const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, id, email, manOffice){
        super (name, id, email)
        this.manOffice = manOffice;
    }
    get officeNumber (){
        return this.manOffice;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;
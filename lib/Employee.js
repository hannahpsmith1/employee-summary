// TODO: Write code to define and export the Employee class
// here we would eitherrrrr write code to define an engineer and export to app.js or it would be defined in app.js and need to be exported here where we would write to the html
// more general than engineer so less specific classes


class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }

}

module.exports = Employee
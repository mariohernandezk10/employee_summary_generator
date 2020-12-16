// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {}
    getId () {}
    getEmail () {}
    getRole () {
        return "Employee"
    }
}



class Manager extends Employee {

    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }

}

const manager = new Manager("Susan", 2, "biggie@gmail.com", 100);
console.log(manager.getRole);

const employee = new Employee("Mario", 1, "mch@gmail.com",);
console.log(employee.getRole);
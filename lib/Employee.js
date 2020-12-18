// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log(this);
        console.log(this.name);
        return this.name;
    }
// WHY CANT I CONSOLE LOG "THIS" HERE? 
    // console.log(this);
    getId () {
        return this.id
    }
    getEmail () {
        return this.email;
    }
    getRole () {
        return "Employee"
    }
}

// const employee = new Employee("Mario", 1, "a@xyz.com")
// // const employee = new Employee(this.name);
// employee.getName();


module.exports = Employee;





// const manager = new Manager("Susan", 2, "biggie@gmail.com", 100);
// console.log(manager.getRole());

// const employee = new Employee("Mario", 1, "mch@gmail.com");
// console.log(employee.getRole());

// const engineer = new Engineer("Ferd", 3, "ferd@gmail.com");
// console.log(engineer.getRole());
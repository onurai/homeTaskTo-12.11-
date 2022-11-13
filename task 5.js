class Employee{
    constructor(name,salary,time){
        this.name = name;
        this.salary = salary;
        this.time = time;
    }
}
class Manager extends Employee{
    Hire(){
        console.log("Hi, i am manager, my name is " + this.name)
    }
}

let emp1 = new Manager("Onur",3100,"3 years");
let emp2 = new Manager("Iyan",2500,"7 years");
emp1.Hire(); emp2.Hire();
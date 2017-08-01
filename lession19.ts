class Person{
    constructor(name){
        console.log(name+"Person Contructor");
    }
    getId(){
        return 10;
    }

}
class Employee extends Person{
    constructor(name){
        super(name);
        console.log(name+"Employee");
    }
    getId(){
        return super.getId();
    }

}
var emps = new Employee("Abc");
console.log(emps.getId()); 

  
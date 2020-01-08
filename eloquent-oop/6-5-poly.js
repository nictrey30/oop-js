// polymorphism
// first - the super class
function Person(age, weight) {
  this.age = age;
  this.weight = weight;
}

// And we will give Person the ability to share their information
Person.prototype.getInfo = function() {
  return `I am ${this.age} years old and weighs ${this.weight} kilos.`;
};

// Next we wish to have a subclass of Person, Employee
function Employee(age, weight, salary) {
  this.age = age;
  this.weight = weight;
  this.salary = salary;
}
Employee.prototype = new Person();

// And we will override the behavior of getInfo by defining one which is more fitting to an Employee

Employee.prototype.getInfo = function() {
  return `I am ${this.age} years old and weighs ${this.weight} kilos and earns ${this.salary} dollar.`;
};

let person = new Person(50, 90);
let employee = new Employee(43, 80, 50000);

console.log(person.getInfo());
console.log(employee.getInfo());

//Function constructor
// let john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'techer'
// };
let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
/*
class Person {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    return new Date().getFullYear() - this.yearOfBirth;
  }
}
*/

Person.prototype.calculateAge = function() {
  return new Date().getFullYear() - this.yearOfBirth;
};
//adding a property to the prototype
Person.prototype.lastName = 'Smith';

let john = new Person('John', 1990, 'techer');
let jane = new Person('Jane', 1969, 'designer');
let mark = new Person('Mark', 1948, 'retired');

// console.log(john.calculateAge());
// console.log(jane.lastName);

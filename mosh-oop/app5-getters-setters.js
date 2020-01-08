const person = {
  firstName: 'Mata',
  lastName: 'Mare',
  // getters -> access properties
  // setters -> change(mutate) them
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const names = value.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
};
console.log(person.fullName);
person.fullName = 'Ana Maria';
console.log(person.fullName);

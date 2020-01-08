// function Rabbit(type) {
//   this.type = type;
// }

class Rabbit {
  constructor(type) {
    this.type = type;
  }
}
Rabbit.prototype.speak = function(line) {
  console.log(`This ${this.type} rabbit says ${line}`);
};

let weirdRabbit = new Rabbit('weird');
weirdRabbit.speak('crazy things');

// Maps
let ages = new Map();
ages.set('Boris', 39);
ages.set('Liang', 22);
ages.set('Júlia', 62);

console.log(`Júlia is ${ages.get('Júlia')}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has('Jack'));
// → Is Jack's age known? false
console.log(ages.has('toString'));
// → false”

console.log({ x: 1 }.hasOwnProperty('x'));
// → true
console.log({ x: 1 }.hasOwnProperty('toString'));
// → false

//

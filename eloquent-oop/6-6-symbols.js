// Symbols are values created with the Symbol function
// Unlike strings, newly created symbols are unique, you cannot create the same symbol twice.

let sym = Symbol('name');
console.log(sym == Symbol('name')); // false

// Being both unique and usable as property names makes symbols suitable for defining interfaces that can peacefully live alongside other properties, no matter what their names are.
const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn.`;
};
console.log([1, 2].toString()); // 1, 2
console.log([1, 2][toStringSymbol]()); // 2 cm of blue yarn
// It is possible to include symbol properties in object expressions and classes by using square brackets around the property name. That causes the property name to be evaluated, much like the square bracket property access notation, which allows us to refer to a binding that holds the symbol.
let stringObject = {
  [toStringSymbol]() {
    return 'a jute rope';
  }
};
console.log(stringObject[toStringSymbol]());
// → a jute rope”

// colt - symbols
// used as indentifiers for object properties
let user = {
  id: 945,
  name: 'Dominique',
  city: 'Siena',
  age: 59
};
const idSym = Symbol('id');
user[idSym] = 3243252314;
console.log(Object.getOwnPropertyNames(user)); // [ 'id', 'name', 'city', 'age' ]
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]

const sym1 = Symbol.for('cat');
const sym2 = Symbol.for('cat');
console.log(sym1 === sym2); // true

// use cases Symbols
const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
const cat = 'blue';

function getThreatLevel(color) {
  switch (color) {
    case RED:
      return 'severe';
    case ORANGE:
      return 'high';
    case YELLOW:
      return 'elevated';
    case BLUE:
      return 'low';
    default:
      return "I don't know that color!";
  }
}
console.log(getThreatLevel(cat)); // I don't know that color!

// symbols for storing metadata in an object
const length = Symbol('length');
class Train {
  constructor() {
    this[length] = 0;
  }
  add(car, contents) {
    this[car] = contents;
    this[length]++;
  }
}
let freightTrain = new Train();
freightTrain.add('refirgerator car', 'cattle');
freightTrain.add('flat car', 'aircraft parts');
freightTrain.add('tank car', 'milk');
freightTrain.add('hopper car', 'coal');
for (car in freightTrain) {
  console.log(car, freightTrain[car]);
}

// use Symbols as keys to prevent name clashes or collisions
class AlertService {
  constructor() {
    this.alerts = {};
  }
  addAlert(symbol, alertText) {
    this.alerts[symbol] = alertText;
    this.renderAlerts();
  }
  removeAlert(symbol) {
    delete this.alerts[symbol];
  }
  renderAlerts() {}
}
const alertService = new AlertService();

class MyComponent {
  constructor(thing) {
    this.componentId = Symbol(thing);
  }
  errorHandler(msg) {
    alertService.addAlert(this.componentId, msg);
    setTimeout(() => {
      alertService.removeAlert(this.componentId);
      console.log('Removed alert', this.componentId);
    }, 3000);
  }
}
let list = new MyComponent('listComponent');
let list2 = new MyComponent('listComponent');
let form = new MyComponent('listComponent');

list.errorHandler('Problem1');
list2.errorHandler('Uh Oh!');

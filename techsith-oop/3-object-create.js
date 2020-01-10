// Object.create(prototypeObject, propertyObject);
const myObject = Object.create(Object.prototype);
const myLiteral = {};
const noProto = Object.create(null);

const Car = function(color) {
  this.color = color;
};

/*
const car1 = new Car('red');
console.dir(car1); // Car { color: 'red' } ​​​​​
const car2 = Object.create(Car.prototype);
console.dir(car2); // Car {} ​​​​​

// the main purpose of Object.create() method is to extend constructors
*/
Car.prototype = {
  getColor() {
    return this.color;
  }
};

const ToyCar = function() {};
ToyCar.prototype = Object.create(Car.prototype);

const legoCar = new ToyCar();

console.log(legoCar instanceof ToyCar); // true
console.log(ToyCar.prototype.isPrototypeOf(legoCar)); // true

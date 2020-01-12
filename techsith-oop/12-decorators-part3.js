// with decorator

let readOnly = function(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
};
class Car {
  constructor(color) {
    Object.assign(this, { color });
  }
  @readOnly
  getColor() {
    return this.color;
  }
}

// let descriptor = {
//   value: function() {
//     return this.color;
//   },
//   writable: false,
//   configurable: true,
//   enumerable: true
// };

// descriptor = readOnly(Car.prototype, 'getColor', descriptor);
// Object.defineProperty(Car.prototype, 'getColor', descriptor);

const redCar = new Car('red');
redCar.getColor = function() {
  return 'blah blah';
};
console.log(redCar.getColor()); // red

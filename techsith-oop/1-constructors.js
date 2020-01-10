/*
let Car = function(color) {
  // The new.target pseudo-property lets you detect whether a function or constructor was called using the new operator. In constructors and functions invoked using the new operator, new.target returns a reference to the constructor or function. In normal function calls, new.target is undefined.
  if (!new.target) throw 'Car() must be called with new';
  this.color = color;
};
let redCar = new Car('red');
let blueCar = new Car('blue');
*/

let Car = function(_color) {
  this.getColor = function() {
    return _color;
  };
  this.setColor = function(color) {
    _color = color;
  };
};

let redCar = new Car('red');

console.log(redCar.getColor());

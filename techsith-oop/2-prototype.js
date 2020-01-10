let Car = function(color) {
  this.color = color;
};
Car.prototype.getColor = function() {
  return this.color;
};
Object.prototype.toString = function() {
  return `color: ${this.color}`;
};
let redCar = new Car('red');
console.log(redCar.getColor());
console.log(redCar.toString());

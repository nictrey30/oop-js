const Car = function() {};
Car.prototype = {
  print() {
    return 'I am a car';
  }
};

const ToyCar = function() {};
ToyCar.prototype = Object.create(Car.prototype);
ToyCar.prototype.print = function() {
  return 'I am a toy car';
};

const ToyTransformer = function() {};
ToyTransformer.prototype = Object.create(ToyCar.prototype);
ToyTransformer.prototype.print = function() {
  return 'I am a toy transformer';
};

const toyota = new Car();
const legoCar = new ToyCar();
const optimusPrime = new ToyTransformer();

console.log(toyota.print()); // I am a car
console.log(legoCar.print()); // I am a toy car
console.log(optimusPrime.print()); // I am a toy transformer

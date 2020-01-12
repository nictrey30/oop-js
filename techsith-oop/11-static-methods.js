class Car {
  constructor(color, price) {
    Object.assign(this, { color, price });
  }
  static comparePrice(car1, car2) {
    return car1.price === car2.price
      ? `${car1.color} car and ${car2.color} car are the same price`
      : car2.price > car1.price
      ? `${car2.color} car has the bigger price`
      : `${car1.color} car has the bigger price`;
  }
  getColor() {
    return this.color;
  }
  get description() {
    return `A ${this.color} car that is selling with $${this.price}`;
  }
}

const redCar = new Car('red', 2200);
const blueCar = new Car('blue', 1300);
const orangeCar = new Car('orange', 2200);

console.log(redCar.description);

console.log(Car.comparePrice(redCar, blueCar));
console.log(Car.comparePrice(redCar, orangeCar));

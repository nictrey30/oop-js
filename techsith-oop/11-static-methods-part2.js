class Car {
  constructor(price) {
    Object.assign(this, { price });
  }
  static sellCar(car) {
    return `selling for ${car.price}`;
  }
}

class Toyota extends Car {
  constructor(price) {
    super(price);
  }
  static sellCar(car) {
    return `Toyota ${super.sellCar(car)}`;
  }
}

const camry = new Toyota(100);
console.log(Toyota.sellCar(camry));

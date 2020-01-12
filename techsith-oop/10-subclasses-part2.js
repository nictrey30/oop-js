class Mammal {
  constructor(a, b, c, d, e) {
    Object.assign(this, { a, b, c, d, e });
  }
}
class Bat extends Mammal {
  constructor(f, ...args) {
    super(...args);
    this.f = f;
  }
}
const newBat = new Bat('f', 'a', 'b', 'c', 'd', 'e');
console.dir(newBat);

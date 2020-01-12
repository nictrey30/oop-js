class Mammal {
  constructor(legs, name = 'john doe') {
    this.legs = legs;
    this.name = name;
    this.warmBlooded = true;
  }
  walk() {
    return `${this.name} is walking`;
  }
}

class Bat extends Mammal {
  constructor(legs, name, eatsMeat) {
    super(legs, name);
    this.eatsMeat = eatsMeat;
  }
  fly() {
    return `${this.name} is flying`;
  }
  walk() {
    let holding = this.eatsMeat ? 'bug' : 'carrot';
    return `${super.walk()} with a ${holding}`;
  }
}

let fruitBat = new Bat(4, 'peter', false);
console.log(fruitBat.walk()); // peter is walking with a carrot

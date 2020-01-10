let Mammal = function(legs) {
  this.legs = legs;
};
Mammal.prototype = {
  walk() {
    return 'walking!';
  },
  sleep() {
    return 'sleeping!';
  }
};

let Bat = function(legs, isVegetarian) {
  Mammal.call(this, legs);
  this.isVegetarian = isVegetarian;
};

Bat.prototype = Object.create(Mammal.prototype);
// setting the constructor of Bat back to Bat because it gets wiped by the Mammal.prototype
Bat.prototype.constructor = Bat;
Bat.prototype.fly = function() {
  return 'flying!';
};

let fruitBat = new Bat(4, true);
console.log(fruitBat.sleep());
console.log(fruitBat.fly());

// Object.setPrototypeOf(dObj, sObj);
let toyota = {
  drive() {
    return 'driving toyota';
  }
};

let camry = {
  wifi() {
    return 'using wifi';
  },
  drive() {
    return `${super.drive()} camry`;
  }
};

// Set toyota's __proto__ to camry's  __proto__'s  __proto__
Object.setPrototypeOf(camry, toyota);

console.dir(camry); //prints the camry object
console.log(camry.wifi()); // using wifi
console.log(camry.drive()); // driving toyota camry

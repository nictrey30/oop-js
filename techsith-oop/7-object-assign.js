let toyota = {
  drive() {
    return 'driving toyota';
  },
  break() {
    return 'breaking';
  }
};

let camry = {
  drive() {
    return ' driving camry';
  },
  wifi() {
    return 'using wifi';
  }
};

Object.assign(camry, toyota);
console.log(camry.drive()); // driving toyota

// Object.assign() utility is to create a copy, but the proto methods dont get copied over
let copyToyota = Object.assign({}, toyota);

// let c1 = function(x, y, z) {
//   this.x = x;
//   this.y = y;
//   this.z = z;
// }
let c1 = function(x, y, z) {
  Object.assign(this, { x, y, z });
};

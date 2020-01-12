let add = function(c) {
  console.log(this.a + this.b + c);
};

let obj = {
  a: 1,
  b: 2
};
add.call(obj, 3);

let argsToArray = function() {
  // console.log(arguments); -> array like object
  return Array.prototype.slice.call(arguments);
};
console.log(argsToArray(1, 2, 3));

// 2 -> calling base constructor from subsonstructor in case of function constructors
let Mammal = function(legs) {
  this.legs = legs;
};
let Cat = function(legs, isDomesticated) {
  Mammal.call(this, legs);
  this.isDomesticated = isDomesticated;
};
let lion = new Cat(4, false);
console.log(lion); // Cat { legs: 4, isDomesticated: false }

let numArray = [1, 2, 3];
console.log(Math.min(1, 2, 3));
console.log(Math.min(...numArray));
console.log(Math.min.apply(null, numArray));

// bind
let Button = function(content) {
  this.content = content;
};
Button.prototype.click = function() {
  console.log(`${this.content} clicked`);
};
let newButton = new Button('add');
let looseClick = newButton.click();
// looseClick(); // undefined

let boundButton = newButton.click.bind(newButton);
boundButton(); // add clicked

// ##############################
let myObj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    console.log('parse called');
  },
  render() {
    this.asyncGet(
      function() {
        this.parse();
      }.bind(this)
    );
  }
};

myObj.render(); // parse called

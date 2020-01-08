// object literal
/*
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw');
  }
};
*/

// factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}
const circle = createCircle(1);

// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log(`draw a circle with  a radius of ${this.radius}`);
  };
}
const another = new Circle(1);
another.draw();

let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number); // 10, because when we call increase and pass number value, its value is copied into the number parameter that si local to the function

let obj = { value: 10 };
function increase2(obj) {
  // the local parameter obj will point to the same object that is  passed
  obj.value++;
}
increase2(obj);
console.log(obj); // { value: 11 }

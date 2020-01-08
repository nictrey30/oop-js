function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log(`a circle with radius of ${this.radius}`);
  };
}

const circle = new Circle(10);
// circle.location = { x: 1 };
const propertyName = 'location';
circle[propertyName] = { x: 1 };

// delete a property from an object
delete circle['location'];

for (let key in circle) {
  console.log(key); //radius, draw
}
// to get only the properties
for (let key in circle) {
  if (typeof circle[key] !== 'function') console.log(key, circle[key]); //radius 10
}

for (let key of Object.keys(circle)) {
  console.log(key); // radius, draw
}

// check if an object has a specific property
if ('radius' in circle) console.log('Circle has a rdaius'); //Circle has a radius

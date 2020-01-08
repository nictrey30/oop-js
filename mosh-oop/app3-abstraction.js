function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeoptimumLocation = function(factor) {
    console.log('computed optimum location with ', factor);
  };

  this.draw = function() {
    computeoptimumLocation(0.1);
    console.log(draw);
  };
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      // perform validation for the value before setting the defaultLocation to it
      if (!value.x || !value.y) throw new Error('Invalid location');
      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
// circle.getdefaultLocation();
circle.defaultLocation = { x: 1, y: 2 }; // throws an error
console.log(circle.defaultLocation);

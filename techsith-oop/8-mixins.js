const jsSkill = {
  knowsJS() {
    return true;
  }
};
const engDegree = {
  hasDegree() {
    return true;
  }
};
const backendSkill = {
  knowsBackend() {
    return true;
  }
};

const jsEngineer = Object.assign({}, jsSkill, engDegree);
const fullstackEngineer = Object.assign({}, jsSkill, backendSkill, engDegree);
console.dir(jsEngineer);

// constructor function
// let Car = function(color) {
//   this.color = color;
// };

// Factory Function
let Car = function(color) {
  let isMoving = false;
  return Object.assign(
    {},
    {
      color: color,
      drive() {
        isMoving = true;
        return this;
      },
      isMoving() {
        return isMoving;
      }
    }
  );
};

let redCar = Car('red');
// console.log(redCar.isMoving()); // false
// redCar.drive();
// console.log(redCar.isMoving()); // true
console.log(redCar.drive().isMoving()); //s

// ##############################
// fly factory function
const flyFactory = function(obj) {
  // inner variable
  let isFlying = false;

  // returns a new object
  return Object.assign({}, obj, {
    fly() {
      isFlying = true;
      return this;
    },
    isFlying() {
      return `${this.name} is ${isFlying ? '' : 'not'} flying`;
    }
  });
};

// human factory function
const humanFactory = function(obj) {
  let isCrying = false;

  return Object.assign({}, obj, {
    cry() {
      isCrying = true;
      return this;
    },
    isCrying() {
      return `${this.name} is ${isCrying ? '' : 'not'} crying`;
    }
  });
};

const clarkKent = {
  name: 'clark kent'
};

// compose an object
const superman = humanFactory(flyFactory(clarkKent));

// set the state
superman.fly().cry();

console.log(superman.isFlying()); // prints: clark kent is  flying
console.log(superman.isCrying()); // prints: clark kent is  crying

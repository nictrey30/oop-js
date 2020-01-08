const dragons = ['cool dragon', 'angry dragon', 'nasty dragon'];
const iterator = dragons[Symbol.iterator]();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
for (const dragon of dragons) {
  dragon;
}

const randomNumber = require('random-number');
function randomItem(array) {
  const randomIndex = randomNumber({
    min: 0,
    max: array.length - 1,
    integer: true
  });
  return array[randomIndex];
}
randomItem(['a', 'b', 'c']);

const makeDragon = () => {
  const dragonSizes = ['big', 'medium', 'tiny'];
  const dragonAbilities = ['fire', 'ice', 'lightning'];
  return `${randomItem(dragonSizes)} ${randomItem(dragonAbilities)} dragon`;
};
// console.log(makeDragon());

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughDragonsSpawned = Math.random() > 0.25;
        if (enoughDragonsSpawned) {
          return {
            value: makeDragon(),
            done: false
          };
        }
        return { done: true };
      }
    };
  }
};
for (const dragon of dragonArmy) {
  console.log(dragon);
}

let myObj = {
  prop1: 123,
  prop2: 'bob',
  prop3: true
};
myObj[Symbol.iterator] = () => {
  let counter = -1;
  return {
    next: () => {
      counter++;
      switch (counter) {
        case 0:
          return {
            value: myObj.prop1,
            done: false
          };
        case 1:
          return {
            value: myObj.prop2,
            done: false
          };
        case 2:
          return {
            value: myObj.prop3,
            done: false
          };
        default:
          return {
            value: undefined,
            done: true
          };
      }
    }
  };
};
let iter = myObj[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for (let prop of myObj) {
  console.log(prop);
}

let myArray = [11, 22, 34, 65, 34];
let mySet = new Set(myArray);
// return an array from the old one without any duplicate values
let arry = [...new Set(myArray)];
console.log(arry);
mySet.add('100');
mySet.add({ a: 1, b: 2 });
mySet.delete(22);
// mySet.clear()
console.log(mySet);
console.log(mySet.size);

mySet.forEach(el => {
  console.log(el);
});

let myMap = new Map([
  ['a1', 'hello'],
  ['b2', 'goodbye']
]);
myMap.set('c3', 'foo');
console.log(myMap);
myMap.delete('a1'); // delete by the key
console.log(myMap.size);

// #############################
/*
let carWeakSet = new WeakSet();
let car1 = {
  make: 'Honda',
  model: 'Civic'
};
carWeakSet.add(car1);
let car2 = {
  make: 'Toyota',
  model: 'Camry'
};
carWeakSet.add(car2);
carWeakSet.delete(car1);
console.log(carWeakSet);
*/

// #############################
let carWeakMap = new WeakMap();

let key1 = {
  id: 1
};

let car1 = {
  make: 'Honda',
  model: 'Civic'
};

let key2 = {
  id: 2
};

let car2 = {
  make: 'Toyota',
  model: 'Camry'
};

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);

carWeakMap.delete(key1);

console.log(carWeakMap);

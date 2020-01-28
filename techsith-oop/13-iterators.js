let mySet = new Set([1, 2, 2, 2, 3]);

for (let val of mySet) {
  console.log(val);
}

let anObject = {
  name: 'bob',
  age: 20,
  friends: ['john', 'kim', 'peter'],
  getName: function() {
    return this.name;
  }
};

for (const [key, value] of Object.entries(anObject)) {
  if (typeof value === 'function') continue;
  console.log(`${key}: ${value}`);
}

// let myString = 'hello';
// for (let char of myString) {
//   console.log(char);
// }

let myArray = [1, 2, 3, 4, 5];
let iterator = myArray[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

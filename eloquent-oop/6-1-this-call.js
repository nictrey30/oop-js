function speak(line) {
  console.log(`The ${this.type} rabbit says he is ${line}`);
}

let whiteRabbit = { type: 'white', speak };
let blackRabbit = { type: 'black' };

whiteRabbit.speak('hungry');
speak.call(whiteRabbit, 'scared');
whiteRabbit.speak.call(blackRabbit, 'scared');
speak.call(blackRabbit, 'hungry');

let sleepyRabbit = whiteRabbit.speak.bind(whiteRabbit, 'sleepy');
sleepyRabbit();
let cokeRabbit = whiteRabbit.speak.bind(blackRabbit, 'sniffing coke');
cokeRabbit();

// this binding
function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({ coords: [3, 4, 5], length: 2 }); // [ 1.5, 2, 2.5 ]

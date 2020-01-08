// use Object.create to create an object with a specific prototype

let protoRabbit = {
  speak(line) {
    console.log(`This ${this.type} rabbit says ${line}`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('SKREE'); //This killer rabbit says SKREE

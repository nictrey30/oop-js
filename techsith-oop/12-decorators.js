let lipstick = function(color) {
  return function(target) {
    target.lips = color;
  };
};

let erarings = function(target) {
  target.hasEarrings = true;
};

@erarings
@lipstick('black')
class Girl {}

console.log(
  `Her lips are ${Girl.lips} and she has earring = ${Girl.hasEarrings}`
);

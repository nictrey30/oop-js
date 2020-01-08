// closures
/*
an inner function has access to the variables and parameters of the outer function, even after the outer function has returned.
- the scope chain always stays intact
*/
function retirement(retirementAge) {
  let msg = ' years left untile retirement';
  return function(yearOfBirth) {
    let age = new Date().getFullYear() - yearOfBirth;
    console.log(`${retirementAge - age} ${msg}`);
  };
}

let retirementUS = retirement(66);
retirementUS(1990);
let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

// write the function with closures
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(`${name} can you please explain what UX design is?`);
//     };
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log(`What subject do you teach ${name}?`);
//     };
//   } else {
//     return function(name) {
//       console.log(`Hello ${name}, what do you do?`);
//     };
//   }
// }
function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  };
}
interviewQuestion('teacher')('John');

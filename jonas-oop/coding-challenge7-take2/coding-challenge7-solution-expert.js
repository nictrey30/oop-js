class Question {
  constructor(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
}
Question.prototype.displayQuestion = function() {
  console.log(this.question);
  // this.answers.forEach((el, index) => {
  //   console.log(`${index}: ${el}`);
  // });
  for (let key of this.answers.keys()) {
    console.log(`${key}: ${this.answers[key]}`);
  }
};
Question.prototype.checkAnswer = function(ans, callback) {
  let sc;
  if (ans === this.correct) {
    console.log('Correct answer!');
    sc = callback(true);
  } else {
    console.log('Wrong Answer!');
    sc = callback(false);
  }
  this.displayScore(sc);
};
// method to display the score in the console
Question.prototype.displayScore = function(score) {
  console.log(`Your score is: ${score}`);
  console.log('-----------------------------');
};

let q1 = new Question(
  'Is JavaScript the coolest programming language in the world?',
  ['Yes', 'No'],
  0
);
let q2 = new Question(
  "What is the name of this course's teacher?",
  ['John', 'Micheal', 'Jonas'],
  2
);
let q3 = new Question(
  'What does best describe coding?',
  ['Boring', 'Hard', 'Fun', 'Tediuos'],
  2
);
let questions = [q1, q2, q3];

function score() {
  let sc = 0;
  // correct is a true or false value
  return function(correct) {
    if (correct) {
      sc++;
    }
    return sc;
  };
}
let keepScore = score();

function nextQuestion() {
  let n = Math.floor(Math.random() * questions.length);
  questions[n].displayQuestion();
  // parseInt converts a string to an integer number
  let answer = prompt('Please select the correct answer.');
  if (answer !== 'exit') {
    //  check the answer only if the game continues
    questions[n].checkAnswer(parseInt(answer), keepScore);
    nextQuestion();
  }
}

nextQuestion();

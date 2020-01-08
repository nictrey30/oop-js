class Question {
  constructor(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
}
Question.prototype.displayQuestion = function() {
  console.log(this.question);
  for (let [key, value] of Object.entries(this.answers)) {
    console.log(`${key}: ${value}`);
  }
};
Question.prototype.checkAnswer = function(ans, callback) {
  let sc;
  if (ans === this.correct) {
    console.log('correct answer!');
    sc = callback(true);
  } else {
    console.log('wrong answer!');
    sc = callback(false);
  }
  this.displayScore(sc);
};
// method for displaying the score in the console
Question.prototype.displayScore = function(score) {
  console.log(`Your current score is: ${score}`);
  console.log('---------------');
};
const myQuestions = [
  {
    question: 'Who is the strongest?',
    answers: {
      a: 'Superman',
      b: 'The Terminator',
      c: 'Waluigi, obviously'
    },
    correct: 'c'
  },
  {
    question: 'What is the best site ever created?',
    answers: {
      a: 'SitePoint',
      b: 'Simple Steps Code',
      c: "Trick question; they're both the best"
    },
    correct: 'c'
  },
  {
    question: 'Where is Waldo really?',
    answers: {
      a: 'Antarctica',
      b: 'Exploring the Pacific Ocean',
      c: 'Sitting in a tree',
      d: 'Minding his own business, so stop asking'
    },
    correct: 'd'
  },
  {
    question:
      "Which famous con-artist's life is the film Catch Me If You Can based on?",
    answers: {
      a: 'Bernard Madoff',
      b: 'Al Capone',
      c: 'Frank Abagnale',
      d: 'Steven Walcott'
    },
    correct: 'c'
  },
  {
    question: 'How many stars does the U.S flag have?',
    answers: {
      a: '52',
      b: '50',
      c: '51',
      d: '49'
    },
    correct: 'b'
  },
  {
    question: 'Who painted The Persistence of Memory',
    answers: {
      a: 'Picasso',
      b: 'Edvard Munch',
      c: 'Salvador Dali',
      d: 'Rene Magritte'
    },
    correct: 'c'
  },
  {
    question: 'How long is the Great Wall of China?',
    answers: {
      a: '4000 miles',
      b: '4500 miles',
      c: '5500 miles',
      d: '6000 miles'
    },
    correct: 'a'
  },
  {
    question: 'What is the most fractured human bone?',
    answers: {
      a: 'Peroneal',
      b: 'Ribs',
      c: 'Tibia',
      d: 'Clavicula'
    },
    correct: 'c'
  },
  {
    question: 'What is the name of the Indian holy river?',
    answers: {
      a: 'Niles',
      b: 'Ganges',
      c: 'Euphrates',
      d: 'Tigris'
    },
    correct: 'c'
  },
  {
    question:
      '	What is both a French wine region and a luxury American automobile?',
    answers: {
      a: 'Cadillac',
      b: 'Pontiac',
      c: 'Chevrolet',
      d: 'Lexus'
    },
    correct: 'a'
  }
];
let questionsArr = [];
for (let i = 0; i < myQuestions.length; i++) {
  questionsArr[i] = new Question(
    myQuestions[i].question,
    myQuestions[i].answers,
    myQuestions[i].correct
  );
}
function score() {
  let sc = 0;
  return function(correct) {
    if (correct) {
      sc++;
    }
    return sc;
  };
}
let keepScore = score();
function nextQuestion() {
  //a random number between 0 and 9
  let randomNumber = Math.floor(Math.random() * questionsArr.length);
  questionsArr[randomNumber].displayQuestion();
  let answer = prompt('Your answer: ');
  if (answer !== 'exit') {
    questionsArr[randomNumber].checkAnswer(answer, keepScore);
    nextQuestion();
  }
}
nextQuestion();

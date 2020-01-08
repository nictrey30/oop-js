/*
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
*/
const sampleQuestions = [
  {
    question: 'Who is the strongest?',
    answers: {
      a: 'Superman',
      b: 'The Terminator',
      c: 'Waluigi, obviously'
    },
    correctAnswer: 'c'
  },
  {
    question: 'What is the best site ever created?',
    answers: {
      a: 'SitePoint',
      b: 'Simple Steps Code',
      c: "Trick question; they're both the best"
    },
    correctAnswer: 'c'
  },
  {
    question: 'Where is Waldo really?',
    answers: {
      a: 'Antarctica',
      b: 'Exploring the Pacific Ocean',
      c: 'Sitting in a tree',
      d: 'Minding his own business, so stop asking'
    },
    correctAnswer: 'd'
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
    correctAnswer: 'c'
  },
  {
    question: 'How many stars does the U.S flag have?',
    answers: {
      a: '52',
      b: '50',
      c: '51',
      d: '49'
    },
    correctAnswer: 'b'
  },
  {
    question: 'Who painted The Persistence of Memory',
    answers: {
      a: 'Picasso',
      b: 'Edvard Munch',
      c: 'Salvador Dali',
      d: 'Rene Magritte'
    },
    correctAnswer: 'c'
  },
  {
    question: 'How long is the Great Wall of China?',
    answers: {
      a: '4000 miles',
      b: '4500 miles',
      c: '5500 miles',
      d: '6000 miles'
    },
    correctAnswer: 'a'
  },
  {
    question: 'What is the most fractured human bone?',
    answers: {
      a: 'Peroneal',
      b: 'Ribs',
      c: 'Tibia',
      d: 'Clavicula'
    },
    correctAnswer: 'c'
  },
  {
    question: 'What is the name of the Indian holy river?',
    answers: {
      a: 'Niles',
      b: 'Ganges',
      c: 'Euphrates',
      d: 'Tigris'
    },
    correctAnswer: 'c'
  },
  {
    question:
      'What is both a French wine region and a luxury American automobile?',
    answers: {
      a: 'Cadillac',
      b: 'Pontiac',
      c: 'Chevrolet',
      d: 'Lexus'
    },
    correctAnswer: 'c'
  }
];
class Question {
  constructor(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}
let myQuestions = [];
sampleQuestions.forEach(function(el) {
  myQuestions.push(new Question(el.question, el.answers, el.correctAnswer));
});

Question.prototype.showQuestion = function() {
  console.log(this.question);
  for (let [key, value] of Object.entries(this.answers)) {
    console.log(`${key}: ${value}`);
  }
};

Question.prototype.checkAnswer = function(input) {
  if (this.correctAnswer === input) {
    console.log(
      `The answer was indeed ${this.correctAnswer}: ${
        this.answers[this.correctAnswer]
      }`
    );
    return true;
  } else {
    return false;
  }
};

Question.prototype.checkInput = function(input) {
  while (input === '' || Object.keys(this.answers).includes(input) === false) {
    if (input === '') {
      input = prompt('Enter something');
    } else if (input === 'exit') {
      return input;
    } else {
      input = prompt('please enter only the possible answers');
    }
  }
  return input;
};

let rand, input;
let score = 0;
let tries = 0;
rand = Math.floor(Math.random() * myQuestions.length);

while (myQuestions.length !== 0) {
  myQuestions[rand].showQuestion();
  input = prompt('What is your answer?');
  input = myQuestions[rand].checkInput(input);
  if (input === 'exit') {
    console.log(`You had a score of ${score} out of ${tries}`);
    break;
  } else {
    if (myQuestions[rand].checkAnswer(input)) {
      score++;
    } else {
      console.log('wrong answer!');
    }
    tries++;
    myQuestions.pop(rand);
    rand = Math.floor(Math.random() * myQuestions.length);
  }
}

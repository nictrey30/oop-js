class Question {
  constructor(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correct;
  }
}

Question.prototype.getAnswers = function() {
  for (let [key, value] of Object.entries(this.answers)) {
    let answersDiv = document.getElementById('answers');
    // console.log(`${key}: ${value}`);
    let para = document.createElement('p');
    para.classList.add('possibleAnswer');
    let node = document.createTextNode(`${key}: ${value}`);
    para.appendChild(node);
    answersDiv.appendChild(para);
  }
};

Question.prototype.getQuestion = function() {
  let questionDiv = document.getElementById('question');
  let para = document.createElement('p');
  let node = document.createTextNode(this.question);
  para.appendChild(node);
  para.style.paddingBottom = '1rem';
  questionDiv.appendChild(para);
};

Question.prototype.checkAnswer = function() {
  let checkValue = this.correctAnswer;
  let possibleAnswers = document.querySelectorAll('.possibleAnswer');
  possibleAnswers.forEach(answer => {
    answer.addEventListener('click', function() {
      if (answer.textContent[0] === checkValue) {
        answer.style.backgroundColor = '#B28F44';
        score += 1;
        document.querySelector('.quizz').classList.add('clicked');
      } else {
        answer.style.backgroundColor = '#5F0905';
        answer.style.color = '#ffd7b4';
        wrongChoices += 1;
        document.querySelector('.quizz').classList.add('clicked');
      }
    });
  });
};

const myQuestions = [
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
      '	What is both a French wine region and a luxury American automobile?',
    answers: {
      a: 'Cadillac',
      b: 'Pontiac',
      c: 'Chevrolet',
      d: 'Lexus'
    },
    correctAnswer: 'c'
  }
];
let questionsArr = [];
for (let i = 0; i < myQuestions.length; i++) {
  questionsArr[i] = new Question(
    myQuestions[i].question,
    myQuestions[i].answers,
    myQuestions[i].correctAnswer
  );
}
let score = 0;
let wrongChoices = 0;
const maxScore = questionsArr.length;
document.getElementById('totalScore').textContent = score;
document.querySelectorAll('.maxScore').forEach(e => {
  e.textContent = maxScore;
});

let currentQuestion = 0;
questionsArr[currentQuestion].getQuestion();
questionsArr[currentQuestion].getAnswers();

document.querySelector('.btn-next').addEventListener('click', function(e) {
  if (currentQuestion === questionsArr.length - 1) {
    //game finished
  } else {
    currentQuestion++;
    document.querySelector('.quizz').innerHTML =
      "<div id='question'></div><div id='answers'></div>";
    questionsArr[currentQuestion].getQuestion();
    questionsArr[currentQuestion].getAnswers();
    questionsArr.forEach(element => {
      if (document.querySelector('.quizz').classList.contains('clicked')) {
        questionsArr.slice(questionsArr.indexOf(element), 1);
      } else {
        element.checkAnswer();
      }
    });
    footer();
  }
});
document.querySelector('.btn-prev').addEventListener('click', function(e) {
  if (currentQuestion === 0) {
    //game started
  } else {
    currentQuestion--;
    document.querySelector('.quizz').innerHTML =
      "<div id='question'></div><div id='answers'></div>";
    questionsArr[currentQuestion].getQuestion();
    questionsArr[currentQuestion].getAnswers();
    footer();
  }
});

questionsArr.forEach(element => {
  if (document.querySelector('.quizz').classList.contains('clicked')) {
    questionsArr.slice(questionsArr.indexOf(element), 1);
  } else {
    element.checkAnswer();
  }
});
function footer() {
  document.querySelector('#currentQuestion').textContent = questionsArr.length;
}
footer();

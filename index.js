'use strict';
alert('Hello! I am an alert box!');
const quizData = [
  {
    question: 'Which of the following is not part of the  harry potter book series?',
    answers: [
      'Order Of the Phoenix',
      'Fantasic Beast',
      'Prisoner of Azkaban',
      'Chamber of Secrets'
    ],
    correctAnswer: 2,
  },
  {
    question: 'What was the make and model of the flying car, that first appeared in Chamber of Secrets movie?',
    answers: [
      'Mini Cooper',
      'Vauxhall Astra',
      'Ford Anglia',
      'Reliant Robin',
    ],
    correctAnswer: 3,
  },
  {
    question: 'In Goblet of Fire, who was the actor who played Cedric Diggory?',
    answers: [
      'Emma Watson',
      'Rupert Grint',
      'Alan Rickman',
      'Robert Pattinson',
    ],
    correctAnswer: 4,
  },
  {
    question: 'When did Harry Potter first encounter the Dementors?',
    answers: [
      'First encounter was on the train',
      'First encounter was during a Quidditch match',
      'First encounter was during the Order of the Phoenix',
      'First encounter was when Harry blasts them off with a Patronus charm',
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is the identity of his Ron Weasley pet rat Scabbers?',
    answers: [
      'Percy',
      'Sirius Black',
      'Lily Potter',
      'Peter Pettigrew',
    ],
    correctAnswer: 4,
  },
];

function startQuiz(){
  $('.start-quiz').on('click',function(){
    console.log('clicked');
  });
}

function handleQuestions(){

}

function handleSelectOption(){

}

function restartQuiz(){

}

function handleQuizApp() {
  startQuiz();
  handleQuestions();
  handleSelectOption();
  restartQuiz();
}

$(handleQuizApp);
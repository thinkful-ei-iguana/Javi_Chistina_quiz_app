'use strict';

const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);


function startGame() {
  console.log('Started');
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random - .5);
  currentQuestionIndex = 0; 
  questionContainerElement.classList.remove('hide');
  setNextQuestion();


}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])


}

function showQuestion(question) {
    questionsElement.innerText = question.question;

}


function selectAnswer() {

}

const questions = [
    [
        {
          question: 'Which of the following is not part of the  harry potter book series?',
          answers: [
            {text: 'Order Of the Phoenix', correct: false},
            {text: 'Fantasic Beast', correct: true},
            {text: 'Prisoner of Azkaban', correct: false},
            {text: 'Chamber of Secrets', correct: false},
          ],
          correctAnswer: 2,
        },
        {
          question: 'What was the make and model of the flying car, that first appeared in Chamber of Secrets movie?',
          answers: [
            {text: 'Mini Cooper', correct: false},
            {text: 'Vauxhall Astra', correct: false},
            {text: 'Ford Anglia', correct: true},
            {text: 'Reliant Robin', correct: false},
          ],
          correctAnswer: 3,
        },
        {
          question: 'In Goblet of Fire, who was the actor who played Cedric Diggory?',
          answers: [
            {text: 'Emma Watson', correct: false},
            {text: 'Rupert Grint', correct: false},
            {text: 'Alan Rickman', correct: false},
            {text: 'Robert Pattinson', correct: true},
          ],
          correctAnswer: 4,
        },
        {
          question: 'When did Harry Potter first encounter the Dementors?',
          answers: [
            {text: 'First encounter was on the train', correct: true},
            {text: 'First encounter was during a Quidditch match', correct: false},
            {text: 'First encounter was during the Order of the Phoenix', correct: false},
            {text: 'First encounter was when Harry blasts them off with a Patronus charm', correct: false},
          ],
          correctAnswer: 1,
        },
        {
          question: 'What is the identity of his Ron Weasley pet rat Scabbers?',
          answers: [
            {text: 'Percy', correct: false},
            {text: 'Sirius Black', correct: false}, 
            {text: 'Lily Potter', correct: false;},
            {text: 'Peter Pettigrew', correct: true},
          ],
          correctAnswer: 4,
        },
      ],
      
]
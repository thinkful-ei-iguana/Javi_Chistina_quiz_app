/* eslint-disable no-undef */
'use strict';

const quizData = { 
  questions: [
    {
      question: 'Which of the following is not part of the  harry potter book series?',
      answers: [
        'Order Of the Phoenix',
        'Fantasic Beast',
        'Prisoner of Azkaban',
        'Chamber of Secrets',
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
  ],
  currentQuestion: 0,
  score: 0,
};

function startQuiz(){
  $('.start-quiz').on('click',function(){
    console.log('clicked');
    renderAQuestion();
  });
}
//Displays current question number your on
function updateQuestion(){
  $('.question').html(`<p id="js-answered"> 
      Questions Number: ${quizData.currentQuestion + 1}/${quizData.questions.length}
  </p>`);
}
//Displays score number
function updateScore(){
  $('.score').html(`<span id="js-score">
  Score: ${quizData.score}/${quizData.questions.length}
  </span>`);
  
}
//Display the answers for the current question
function updateAnswers(){
  let question = quizData.questions[quizData.currentQuestion];
  //loop through answers and print
  for(let i in quizData.questions){
    console.log(question.answers[i]);
    $('.js-answers').append(`<input type="radio" name="answers" id="option${i}" value="${question.answers[i]}" tabindex="${i}">
    <label for="answers${i}"> ${question.answers[i]}</label><br>
    <!-- will be used later to display information for wrong or right answer<span id="js-r${i}">test</span>-->`);
  }
}

function renderAQuestion(){
  let question = quizData.questions[quizData.currentQuestion];
  updateQuestion();
  updateScore();

  $('.main').html(`<div>
  <form id="js-questions" class="question-form">
    
      <div class="row question">
        <div class="col-12">
          <legend> ${question.question}</legend>
        </div>
      </div>

      <div class="row options">
        <div class="col-12">
                   <!--display answers to go here-->
          <div class="js-answers"></div>
      </div>
    </div>
  
    <div class="row">
      <div class="col-12">
        <button type = "submit" id="answer" tabindex="5">Submit</button>
        <button type = "button" id="next-question" tabindex="6"> Next >></button>
      </div>
    </div>
  </form>
</div>`);
  updateAnswers();
  //hides the 'next' button before submitting it
  $('#next-question').hide();
}

function handleQuestions(){

}
//checks for if right or wrong answer
function handleSelectOption(){
  $('form').on('sumbit','#js-questions',function(e){
    e.preventDefault();

    let currentQuestion = quizData.questions[quizData.currentQuestion];
    let selectedAnswer = $('input[name^=answers]:checked').val();

    if(selectedAnswer){
      console.log(selectedAnswer);
    }

  });
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


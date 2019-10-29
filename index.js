/* eslint-disable no-undef */
'use strict';
function main(){
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
        correctAnswer: 'Fantasic Beast',
      },
      {
        question: 'What was the make and model of the flying car, that first appeared in Chamber of Secrets movie?',
        answers: [
          'Mini Cooper',
          'Vauxhall Astra',
          'Ford Anglia',
          'Reliant Robin',
        ],
        correctAnswer: 'Ford Anglia',
      },
      {
        question: 'In Goblet of Fire, who was the actor who played Cedric Diggory?',
        answers: [
          'Emma Watson',
          'Rupert Grint',
          'Alan Rickman',
          'Robert Pattinson',
        ],
        correctAnswer: 'Robert Pattinson',
      },
      {
        question: 'When did Harry Potter first encounter the Dementors?',
        answers: [
          'First encounter was on the train',
          'First encounter was during a Quidditch match',
          'First encounter was during the Order of the Phoenix',
          'First encounter was when Harry blasts them off with a Patronus charm',
        ],
        correctAnswer: 'First encounter was on the train',
      },
      {
        question: 'What is the identity of his Ron Weasley pet rat Scabbers?',
        answers: [
          'Percy',
          'Sirius Black',
          'Lily Potter',
          'Peter Pettigrew',
        ],
        correctAnswer: 'Peter Pettigrew',
      },
    ],
    currentQuestion: 0,
    score: 0,
  };

  function startQuiz(){
    $('.start-quiz-button').on('click',function(){
      console.log('clicked');
      renderAQuestion();
    });
  }
  //Displays current question number your on
  function updateQuestion(){
    $('.question').html(`<p id="question-order"> 
      Question: ${quizData.currentQuestion + 1}/${quizData.questions.length}
  </p>`);
  }
  //Displays score number
  function updateScore(){
    $('.score').html(`<span id="score-count">
  Score: ${quizData.score}/${quizData.questions.length}
  </span>`);
  
  }
  //Display the answers for the current question
  function updateAnswers(){
    let question = quizData.questions[quizData.currentQuestion];
    //loop through answers and print

    for(let i = 0; i < question.answers.length; i++){
      $('.quiz-answers').append(`
      <div class="input-label-box">

      <div class="input-label-text">
      <input type="radio" name="answers" id="answers${i+1}" class="answer-options" value="${question.answers[i]}" tabindex="${i+1}">
      <label for="answers${i+1}"> ${question.answers[i]}</label><br>
      </div>

    <div class="answer-span">
    <span id="js-r${i+1}" class="answer-opitions"></span>
    </div>

    </div>`);
    }
  }
  //render question
  //html main form layout
  function renderAQuestion(){
    let question = quizData.questions[quizData.currentQuestion];
    updateQuestion();
    updateScore();
    $('.question').show();
    $('.score').show();

    $('.main').html(`
  <form aria-label="harry potter questions" id="js-questions" class="question-form" role="main-quiz">
   <div class="container">

        <div class="question-box">
          <legend aria-label="question"class="quiz-questions"> ${question.question}</legend>
        </div>

        <div class="answer-box">
                   <!--display answers to go here-->
          <div aria-label="list of answers" class="quiz-answers" ></div>
        </div
  
      <div class="submitAndNext">
        <button aria-label="submit question button" type="submit" id="answer" tabindex="5">Submit</button>
        <button aria-label="next question button" type="button" id="next-question" tabindex="6"> Next >></button>
      </div>
</div>
  </form>`);
    updateAnswers();
    //hides the 'next' button before submitting it
    $('#next-question').hide();

  }

  function displayResults(){
    $('.main').html(`
    <div class="results">
    <form id="js-restart-quiz">
      <div class="results-box">

          <div class="final-score-box">
            <legend class="result">You scored: ${quizData.score}/${quizData.questions.length}</legend>
          </div>
        
          <div class="restart-button-box">
            <button type="button" id="restart"> Restart Quiz </button>
          </div>
      </div>
        
  </form>
  </div>`
    );
    quizData.currentQuestion = 0;
    quizData.score = 0;
    $('.question').hide();
    $('.score').hide();
  }

  function handleQuestions(){
    $('.main').on('click','#next-question',function(){
      if(quizData.currentQuestion === quizData.questions.length){
        displayResults();
      } else {
        renderAQuestion();
      }
    });
  }
  //checks if right or wrong answer and displays respective message
  function handleSelectOption(){
    $('.main').on('submit','.question-form',function(event){
      event.preventDefault();

      let currentQuest = quizData.questions[quizData.currentQuestion];
      let selectedAnswer = $('input[type=radio]:checked').val();
    
      if(!selectedAnswer){
        alert('choose an option');
        return;
      }
    

      let id_num = currentQuest.answers.findIndex(i => i === selectedAnswer);
      let id = '#js-r' + ++id_num;
      $('span').removeClass('right-answer wrong-answer');
      if(selectedAnswer === currentQuest.correctAnswer){
        quizData.score++;
        $(`${id}`).append('CORRECT <br/>');
        $(`${id}`).addClass('right-answer');
      } else {
        $(`${id}`).append(`The answer is "${currentQuest.correctAnswer}"<br/>`);
        $(`${id}`).addClass('wrong-answer');
      }
    
      quizData.currentQuestion++;
      $('#js-score').text(`Score: ${quizData.score}/${quizData.questions.length}`);
      $('#answer').hide();
      $('input[type=radio]').attr('disabled', true);
      $('#next-question').show();
    });
  }

  function restartQuiz(){
    $('.main').on('click','#restart',function(){
      renderAQuestion();
    });
  }

  function handleQuizApp() {
    startQuiz();
    handleQuestions();
    handleSelectOption();
    restartQuiz();
  }

  $(handleQuizApp);

}
$(main);
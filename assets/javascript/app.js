$(document).ready(function() {

  //GLOBAL VARIABLES
  var time = 120;
  var intervalId;
  var wins = 0;
  var losses = 0;
  var count = 0;

  $('.time-remaining').hide();
  $('.results-section').hide();
  $('.trivia-section').hide();

  $('#seconds').text(time);


  //STOP TIMER
  function stop(){
    clearInterval(intervalId);
  }

  //INITIALIZATION OF PAGE
  function run(){
    time = 120;
    wins = 0;
    losses = 0;
    count = 0;

    intervalId = setInterval(decrement, 1000);

    $('.results-section').hide();
    $('.trivia-section').show();
    $('.time-remaining').show();
    $('#start-button').hide();

    displayQuestion();
    displayAnswers();
  }

  //START BUTTON TO BEGIN GAME
  $('#start-button').on('click',function(){
    time = 120;
    intervalId;
    wins = 0;
    losses = 0;
    count = 0;

    $('.results-section').hide();
    $('.trivia-section').show();
    $('.time-remaining').show();
    $('#start-button').hide();

    run();
    displayQuestion();
    displayAnswers();
  });

  //ALLOWS TIMER TO TICK DOWN
  function decrement() {
    time--;

    $('#seconds').text(time);

    if(time === 0){

      stop()

      $('.trivia-section').hide();
      $('.time-remaining').hide();
      $('.results-section').show();
      $('#right-answers').text(wins);
      $('#wrong-answers').text(losses);
    }
  }

  //TRY AGAIN BUTTON AT END OF GAME
  $('#try-again').on('click', function(){
    run();
  });


  //QUESTIONS ARRAY
  var questionAnswer = [
    {
      question: "Who was Batman's original sidekick Robin?",
      response: ['Jason Todd', 'Damian Wayne', 'Dick Grayson', 'Barbara Gordon'],
      answer: 3
    },
    {
      question: "What is the name of the Penguin's nightclub?",
      response: ['Glacier Palace', 'The Cold Club', 'The Freezer', 'Iceberg Lounge'],
      answer: 4
    },
    {
      question: 'Who is Batman?',
      response: ['Bruce Wayne', 'Peter Parker', 'Archie Andrews', 'Dale Cooper'],
      answer: 1
    },
    {
      question: "What is Batman's superpower?",
      response: ['Nothing', 'Super Strength', 'Flight', 'Money'],
      answer: 1
    },
    {
      question: 'Which hot-shot District Attorney would later become the villainous Two-Face?',
      response: ['Jim Gordon', 'Harvey Dent', 'Edward Nigma', 'Harvey Bullock'],
      answer: 2
    },
    {
      question: "What super villain would break Batman's back in the Knightfall storyline?",
      response: ['Killer Croc', 'Bane', 'Mr. Freeze', 'The Joker'],
      answer: 2
    },
    {
      question: 'Where does Batman send his most twisted enemies to be rehabilitated?',
      response: ['The Streets', 'Bedlam Institution', 'Arkham Asylum', 'Gotham Hospital'],
      answer: 3
    },
    {
      question: 'Which member of the Bat-Family would later become Oracle?',
      response: ['Barbara Gordon', 'Damian Wayne', 'Oliver Queen', "Ra's Al Ghul"],
      answer: 1
    },
    {
      question: "What is the name of Batman's dog?",
      response: ['Batdog', 'Spark', 'Ace', 'Krypto'],
      answer: 3
    },
    {
      question: "What were the names of Bruce Wayne's parents?",
      response: ['Ed & Catelyn', 'Michael & Jessica', 'John & Deborah', 'Thomas & Martha'],
      answer: 4
    },
  ];

  //SHOWS QUESTIONS FROM ARRAY TO BE DISPLAYED ON PAGE
  function displayQuestion(){
    $('.questions').text(questionAnswer[count].question);
  }

  //DISPLAYS THE RESPONSES FROM THE ARRAY
  function displayAnswers(){
    $('#answer1').text(questionAnswer[count].response[0]);
    $('#answer2').text(questionAnswer[count].response[1]);
    $('#answer3').text(questionAnswer[count].response[2]);
    $('#answer4').text(questionAnswer[count].response[3]);
  }

  //INDEX COUNTER TO PROCEED TO NEXT QUESTIONS WITH FALLBACK
  function nextQuestion(){
    count++;

    if(count === questionAnswer.length){
      $('.trivia-section').hide();
      $('.time-remaining').hide();
      $('.results-section').show();
      $('#right-answers').text(wins);
      $('#wrong-answers').text(losses);

      stop();
    }
  }

  //CHECKS THE BUTTON VALUE AGAINST ANSWERS IN ARRAY
  $('.answer').on('click', function(){
    if($(this).val() == questionAnswer[count].answer){
      wins++;
      nextQuestion();
      displayQuestion();
      displayAnswers();
    }
    else{
      losses++;
      nextQuestion();
      displayQuestion();
      displayAnswers();
    }
  });
});

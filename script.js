var question = document.getElementById("question");
var answerOne = document.getElementById("answer-one");
var answerTwo = document.getElementById("answer-two");
var answerThree = document.getElementById("answer-three");
var answerFour = document.getElementById("answer-four");
var timeLeft = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var totalTime = 76;
var elapsedTime = 0;    
var myInterval;

//user clicks the start button
    //click event for start button which starts the quiz, prompts the first question and disappears when the quiz begins
    //the timer appears in place of the start button
    //start button reappears after the quiz is over

startButton.addEventListener("click", function(){
    this.style.display = "none";
    timeStart();
    quizQuestions();
});

//interval for countdown - setInterval(callback, 1000);
    //increment elapsedTime
    //calculate time left by subtracting totalTime from elapsedTime
    //check to see that totalTime === elapsedTime
    //update timeLeft in HTML (.textContent or .enterHTML???????)
    //when timer reaches zero, game ends

function decreaseTimer (){
    if (totalTime > 0){
        totalTime-=1;
    }else{
        endGame();
    }
    timeLeft.innerHTML = totalTime
}

function timeStart(){
   myInterval = setInterval(decreaseTimer, 1000);
   decreaseTimer();
}

//questions and answers
    //if/else conditional for answers?
    //if answer === "true" next question
    //else subtract time
function quizQuestions(){
    var questions = [
        {displayQuestion: "a",
        answerTrue: "b",
        answerFalseOne: "c",
        answerFalseTwo: "d",
        answerFalseThree: "e"},

        {displayQuestion: "a",
        answerTrue: "b",
        answerFalseOne: "c",
        answerFalseTwo: "d",
        answerFalseThree: "e"},

        {displayQuestion: "a",
        answerTrue: "b",
        answerFalseOne: "c",
        answerFalseTwo: "d",
        answerFalseThree: "e"},
    ]

    question.innerHTML = questions[0].displayQuestion;
    answerOne.innerHTML = questions[0].answerTrue;
    answerTwo.innerHTML = questions[0].answerFalseOne;
    answerThree.innerHTML = questions[0].answerFalseTwo;
    answerFour.innerHTML = questions[0].answerFalseThree;
}

//when the user clicks the answer
    //validates whether the answer is correct
    //false answers deduct time from the clock
    //answer is stored in local storage
    //next question prompts

//endgame functionality
    //show final score
    //user is prompted with a form to submit initials
    //when they enter intials, it saves to local storage, along with their score
    //lists user's scores

function endGame(){
    console.log("Game Over");
}
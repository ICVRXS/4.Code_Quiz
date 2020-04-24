var question = document.getElementById("question");
var answerOne = document.getElementById("answer-one");
var answerTwo = document.getElementById("answer-two");
var answerThree = document.getElementById("answer-three");
var answerFour = document.getElementById("answer-four");
var timeLeft = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var answerBtn = document.createElement("button");
var totalTime = 76; 
var myInterval;
var currentQuestion = -1;
var score = 0;

startButton.addEventListener("click", function(){
    this.style.display = "none";
    timeStart();
    quizQuestions();
});

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
    //else subtract time, next question

function quizQuestions(){
    var questions = [
        {displayQuestion: "a",
        answerTrue: "b",
        answerFalseOne: "c",
        answerFalseTwo: "d",
        answerFalseThree: "e"},

        {displayQuestion: "a2",
        answerTrue: "b2",
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

    question.innerHTML = questions[1].displayQuestion;
    answerOne.innerHTML = questions[1].answerTrue;
    answerTwo.innerHTML = questions[1].answerFalseOne;
    answerThree.innerHTML = questions[1].answerFalseTwo;
    answerFour.innerHTML = questions[1].answerFalseThree;

    question.innerHTML = questions[2].displayQuestion;
    answerOne.innerHTML = questions[2].answerTrue;
    answerTwo.innerHTML = questions[2].answerFalseOne;
    answerThree.innerHTML = questions[2].answerFalseTwo;
    answerFour.innerHTML = questions[2].answerFalseThree;

    answerOne.addEventListener("click", function(){
        console.log("correct");
    });
    answerTwo.addEventListener("click", function(){
        console.log("incorrect");
    });
    answerThree.addEventListener("click", function(){
        console.log("incorrect");
    });
    answerFour.addEventListener("click", function(){
        console.log("incorrect");
    });
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
    clearInterval(myInterval);
    console.log("Game Over");
}
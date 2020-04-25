var question = document.getElementById("question");
var answerOne = document.getElementById("answer-one");
var answerTwo = document.getElementById("answer-two");
var answerThree = document.getElementById("answer-three");
var answerFour = document.getElementById("answer-four");
var timeLeft = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var answerBtn = document.createElement("button");
var initialForm = document.getElementById("initial-form")
var displayScore = document.getElementById("score");
var userInitials = document.getElementById("initials")
var totalTime = 76; 
var myInterval;
var currentQuestion = -1;
var score = 0;
var myInitials = "";
var myScore = "";

initialForm.style.display = "none";

startButton.addEventListener("click", function(){
    this.style.display = "none";
    timeStart();
    setButtons();
    nextQuestion();
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

var questions = [
    {displayQuestion: "First question",
    answerOne: "First question answer 1",
    answerTwo: "First question answer 2",
    answerThree: "First question answer 3",
    answerFour: "First question answer 4",

    answerTrue: "First question answer 1"},

    {displayQuestion: "Second question",
    answerOne: "Second question answer 1",
    answerTwo: "Second question answer 2",
    answerThree: "Second question answer 3",
    answerFour: "Second question answer 4",

    answerTrue:"Second question answer 1"},

    {displayQuestion: "Third question",
    answerOne: "Third question answer 1",
    answerTwo: "Third question answer 2",
    answerThree: "Third question answer 3",
    answerFour: "Third question answer 4",

    answerTrue: "Third question answer 1"},
]

function nextQuestion(){
    if(currentQuestion < questions.length -1){
        currentQuestion++;
        question.innerHTML = questions[currentQuestion].displayQuestion;
        answerOne.innerHTML = questions[currentQuestion].answerOne;
        answerTwo.innerHTML = questions[currentQuestion].answerTwo;
        answerThree.innerHTML = questions[currentQuestion].answerThree;
        answerFour.innerHTML = questions[currentQuestion].answerFour;
    }else{
        endGame();
    }
}

function setButtons(){
    answerOne.addEventListener("click", function(){
        checkCorrect(this.innerText);
    });
    answerTwo.addEventListener("click", function(){
        checkCorrect(this.innerText);
    });
    answerThree.addEventListener("click", function(){
        checkCorrect(this.innerText);
    });
    answerFour.addEventListener("click", function(){
        checkCorrect(this.innerText);
    });
}

function checkCorrect(input){
    if (input == questions[currentQuestion].answerTrue){
        score++
        nextQuestion();
    }else{
        totalTime -=10;
        nextQuestion();
    }
}
//endgame functionality
    //show final score
    //user is prompted with a form to submit initials
    //when they enter intials, it saves to local storage, along with their score
    //lists user's scores

function endGame(){
    document.getElementById("initials-form").addEventListener("submit", function(event){
        event.preventDefault();
        localStorage.setItem("Initials", userInitials.myInitials);
        localStorage.setItem("Score", score.myScore);
    });
    clearInterval(myInterval);
    timeLeft.style.visibility = "hidden";
    displayScore.innerHTML = ("Your score: " + score);
    document.getElementById("initial-form").style.display = "block";
    document.getElementById("question-box").style.display = "none";
}
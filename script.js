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
var totalTime = 41; 
var myInterval;
var currentQuestion = -1;
var score = 0;
var myInitials;
var myScore;

//Hides initial form when page loads
initialForm.style.display = "none";

//Start button
startButton.addEventListener("click", function(){
    this.style.display = "none";
    timeStart();
    setButtons();
    nextQuestion();
});

//Timer
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

//Questions and answers arranged into anonymous objects within an array
//True answer listed on bottom of each object
var questions = [
    {displayQuestion: "Who recieved the coveted 'Golden Turkey' award for worst director in the 1980 book 'The Golden Turkey Awards'?",
    answerOne: "Quentin Tarantino",
    answerTwo: "Ed Wood",
    answerThree: "Bert I. Gordon",
    answerFour: "George Lucas",

    answerTrue: "Ed Wood"},

    {displayQuestion: "In 'The Golden Turkey Awards', one of the nominated films was made up. Which film is the fake one?",
    answerOne: "Dog of Norway",
    answerTwo: "They Saved Hitler's Brain",
    answerThree: "Polybius",
    answerFour: "Troll 2",

    answerTrue:"Dog of Norway"},

    {displayQuestion: "Despite being nominated for a Golden Globe for his performance in this film, both Paul Newman and 'The Golden Turkey Awards' called it the most embarassing movie debut for an actor",
    answerOne: "Somebody Up There Likes Me",
    answerTwo: "The Color of Money",
    answerThree: "Plan 9 from Outer Space",
    answerFour: "The Silver Chalice",

    answerTrue: "The Silver Chalice"},
]

//nextQuestion function determines which item is currently being displayed within the array
//Once all the questions have been cleared, it runs the endGame function
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

//Sets event listeners for each answer element
//calls on checkCorrect function to see if input is correct or not
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

//Checks whether the answer is correct or not
//A correct answer adds a point to the score
//False answers subtract 10 seconds from the timer
function checkCorrect(input){
    if (input == questions[currentQuestion].answerTrue){
        score++
        nextQuestion();
    }else{
        totalTime -=10;
        nextQuestion();
    }
}

//Endgame
//Stops and hides the timer
//Shows score and asks for user initials
function endGame(){
    document.getElementById("initials-form").addEventListener("submit", function(event){
        event.preventDefault();
        localStorage.setItem("initials", userInitials.value);
        localStorage.setItem("score", score);
        console.log(userInitials.value);
        console.log(score);
        if(localStorage.getItem("initials" === null && "score" === null)){
            userScore = {myInitials: "initials", myScore: "score"}
        }else{
            myInitials = JSON.stringify(localStorage.getItem("initials"));
            myScore = JSON.stringify(localStorage.getItem("score"));
        }
        myInitials.push("initials");
        myScore.push("score");
    });
    clearInterval(myInterval);
    timeLeft.style.visibility = "hidden";
    displayScore.innerHTML = ("Your score: " + score);
    document.getElementById("initial-form").style.display = "block";
    document.getElementById("question-box").style.display = "none";
}
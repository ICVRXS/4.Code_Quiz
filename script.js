var question = document.getElementById("question"),
    answer = document.getElementById("answers"),
    startButton = document.getElementById("start-button"),
    timeLeft = document.getElementById("timer"),
    totalTime = 75,
    elapsedTime = 0,


//user clicks the start button
    //click event for start button which starts the quiz, prompts the first question and disappears when the quiz begins
    //the timer appears in place of the start button
    //start button reappears after the quiz is over

//questions and answers
    //questions in an array
    //possible answers in an object
    //if/else conditional for answers
    //if answer === "true" next question
    //else subtract time

//when the user clicks the answer
    //validates whether the answer is correct
    //false answers deduct time from the clock
    //answer is stored in local storage
    //next question prompts

//interval for countdown - setInterval(callback, 1000);
    //increment elapsedTime
    //calculate time left by subtracting totalTime from elapsedTime
    //check to see that totalTime === elapsedTime
    //update timeLeft in HTML (.textContent or .enterHTML???????)
    //when timer reaches zero, game ends

//endgame functionality
    //show final score
    //user is prompted with a form to submit initials
    //when they enter intials, it saves to local storage, along with their score
    //lists user's scores
var questions = [
    { q: "This will be the first question?", 
    mc:["choice 1", "choice 2", "choice 3", "choice 4"],
    a: "choice 4"},
    { q: "This will be the second question?", 
    mc:["choice 1", "choice 2", "choice 3", "choice 4"],
    a: "choice 1"},
    { q: "This will be the third question?",
    mc:["choice 1", "choice 2", "choice 3", "choice 4"],
    a: "choice 2"},
    { q: "This will be the fourth question?",
    mc:["choice 1", "choice 2", "choice 3", "choice 4"],
    a: "choice 2"},
    { q: "This will be the fifth question?",
    mc:["choice 1", "choice 2", "choice 3", "choice 4"],
    a: "choice 3"},
];

// this variable sets the timer to 100 seconds - giving 20 seconds per question
var secondsLeft = 100;

var highScore = document.querySelector("#highscore");
// connects timer variable to the timer id on HTML
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");
var quizContainer = document.getElementById("quiz");
var submitButton = document.getElementById("submit");
var highScoresContainer = document.getElementById("results");

// function showQuiz() {
//     window.open("quiz.html")
// }

// startBtn.addEventListener("click", showQuiz);

function setTime() {
    // setting function to decrease the seconds while displaying to user how many seconds are left
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft + " seconds left"
// once timer gets to zero the timer is cleared & a message will be displayed
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000)
}

// message displayed once timer ends
function sendMessage() {
    timer.textContent = "Your time is up!";
    // send an alert that the quiz is now over & show highscore page
}

//timer will start when press start button
startBtn.addEventListener("click", setTime);
//quiz eill start when press start button
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    var currentQuestion = 0;
    var score = 0;

    function displayCurrentQuestion(question) {
        for (var i = 0; i < questions.length; i++) {
            var currentQ = questions[i].q;
            console.log(currentQ);
        }
    }

    displayCurrentQuestion(0);
}



function showHighScores() {}

submitButton.addEventListener("click", showHighScores);
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

// variables from index.html
var timer = document.querySelector("#timer");
var jumbo = document.querySelector("#jumbotron");
var startBtn = document.querySelector("#start-btn");
var quizBox = document.getElementById("quiz-box");
var choiceA = document.getElementById("#a");
var choiceB = document.getElementById("#b");
var choiceC = document.getElementById("#c");
var choiceD = document.getElementById("#d");

// variables from initials box
var initialsBox = document.getElementById("#initials-box");
var yourScore = document.getElementById("#your-score");
var initials = document.getElementById("#initials");
var initialInput = document.getElementById("#enter-initials");
var initialSubmitBtn = document.getElementById("#submit-initials");

// variables from highscores.html
var highScoresContainer = document.getElementById("results");
var highScores = document.querySelector("#highscores");
var UserScores = document.querySelector("#user-scores");
var GoBackBtn = document.querySelector("#go-back");

// this variable sets the timer to 100 seconds - giving 20 seconds per question
var secondsLeft = 100;

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
    // send an alert that the quiz is now over & show initials box
}

//timer will start when press start button
startBtn.addEventListener("click", setTime);
//quiz box will display when press start button
startBtn.addEventListener("click", startQuiz);



//this function will display & start quiz
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


// this function will bring the user to highscores page
function showHighScores() {}

initialSubmitButton.addEventListener("click", showHighScores);
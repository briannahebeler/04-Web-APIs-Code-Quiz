var questions = [
    { q: "This will be the first question?", 
    mc:["a", "b", "c", "d"],
    a: "d"},
    { q: "This will be the second question?", 
    mc:["a", "b", "c", "d"],
    a: "a"},
    { q: "This will be the third question?",
    mc:["a", "b", "c", "d"],
    a: "b"},
    { q: "This will be the fourth question?",
    mc:["a", "b", "c", "d"],
    a: "b"},
    { q: "This will be the fifth question?",
    mc:["a", "b", "c", "d"],
    a: "c"},
];

// variables from index.html
var timer = document.querySelector("#timer");
var jumbo = document.querySelector("#jumbotron");
var startBtn = document.querySelector("#start-btn");

//variables from quiz box
var quizBox = document.getElementById("quiz-box");
var questions = document.getElementById("questions");
var choices = document.getElementById("choices");
var choiceA = document.getElementById("#a");
var choiceB = document.getElementById("#b");
var choiceC = document.getElementById("#c");
var choiceD = document.getElementById("#d");
var quizNavBtns = document.getElementById("quiz-nav-btns");
var backBtn = document.getElementById("back");
var nextBtn = document.getElementById("next");
var submitQuizBtn = document.getElementById("submit-quiz");

// variables from initials box
var initialsBox = document.getElementById("#initials-box");
var yourScore = document.getElementById("#your-score");
var initials = document.getElementById("#initials");
var initialInput = document.getElementById("#enter-initials");
var initialSubmitBtn = document.getElementById("#submit-initials");

// variables from highscores.html
var highScoresContainer = document.getElementById("results");
var highScores = document.querySelector("#highscores");
var userScores = document.querySelector("#user-scores");
var goBackBtn = document.querySelector("#go-back");

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


//this function will display quiz box
function showQuizBox() {
    if (jumbo.style.display === "block" && quizBox.style.display === "none") {
        jumbo.style.display = "none";
        quizBox.style.display = "block";
    }
}

function startQuiz () {
    // var currentQuestion = 0;
    // var score = 0;

    // function displayCurrentQuestion(question) {
    //     for (var i = 0; i < questions.length; i++) {
    //         var currentQ = questions[i].q;
    //         console.log(currentQ);
    //     }
    // }

    // displayCurrentQuestion(0);
}

//this function will display initial box
function showInitialBox () {
    if (jumbo.style.display === "none" && quizBox.style.display === "block" && initialsBox.style.display === "none") {
        jumbo.style.display = "none";
        quizBox.style.display = "none";
        initialsBox.style.display = "block"
    } 
}

// this function will bring the user to highscores page
function showHighScores() {

}

// EVENT LISTENERS
// ====================================================
//timer will start when press start button
startBtn.addEventListener("click", setTime);
//quiz box will display when press start button
startBtn.addEventListener("click", showQuizBox);
//when press submit quiz button it will display initial box
submitQuizBtn.addEventListener("click", showInitialBox)
//when press initial submit button it will show high score page
initialSubmitButton.addEventListener("click", showHighScores);
// ====================================================
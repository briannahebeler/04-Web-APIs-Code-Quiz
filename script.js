var questions = [
    { question: "This will be the first question?", answer: true },
    { question: "This will be the second question?", answer: false },
    { question: "This will be the third question?", answer: true},
    { question: "This will be the fourth question?", answer: true },
    { question: "This will be the fifth question?", answer: false }
];

var currentQuestion = 0;
var correctAns = 0;
var incorrectAns = 0;
var secondsLeft = 150;

var highScore = document.querySelector("#highscore");
var timer = document.querySelector("#timer");
var quizContainer = document.getElementById("quiz");
var submitButton = document.getElementById("submit");
var highScoresContainer = document.getElementById("results");

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + "seconds left"

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000)
}

function sendMessage() {
    timer.textContent = "The quiz is now over";
}

setTime();

function buildQuiz() {}

function displayCurrentQuestion(question) {
    for (var i = 0; i < questions.length; i++) {
        var answer = confirm(questions[i].q);
        console.log(answer);
    }
}

displayCurrentQuestion(0);

function showHighScores() {}

submitButton.addEventListener("click", showHighScores);
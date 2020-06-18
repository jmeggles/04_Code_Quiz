var questions = [
    // Random questions, choices, and answers for code quiz (https://thoughtcatalog.com/samantha-newman/2020/04/funny-trivia-questions/)
    {
        title: "What is Scooby Doo's real name?",
        choices: ["Scooby Doodles", "Scoobert Doo", "Scooby the Dog", "Scooby Doo Doo"],
        answer: "Scoobert Doo",
    },
    {
        title: "In Florida only on Sundays, it is illegal for a single woman to do what?",
        choices: ["Shop", "Dance", "Skydive", "Drink a Beer"],
        answer: "Skydive",
    },
    {
        title: "How long is New Zealand’s Ninety Mile Beach?",
        choices: ["90 miles", "55 miles", "10 miles", "85 miles"],
        answer: "55 miles",
    },
    {
        title: "In California you can’t legally buy a mousetrap without having what?",
        choices: ["Photo ID", "Hunting License", "Two Arms", "Proof of Infestation"],
        answer: "Hunting License",
    },
    {
        title: "What was the first fruit that was eaten on the moon?",
        choices: ["Apple", "Strawberry", "Banana", "Peach"],
        answer: "Peach",
    },
];

// hook elements from page (i.e var example1 = document.quesryselector(".elemet class")) 
// hook container element
var containerEl = document.querySelector(".container");

// hook timer element
var timerDisplay = document.querySelector(".timer");
var scoreDisplay = document.querySelector(".score");

// create dynamic elements
var startText = document.createElement("h1")

// creat buttone to start quiz
var startBtn = document.createElement("button");

// create p tag tp display questions
var questionText = document.createElement("p");

// question counter to tally correct answers
var questionCounter = document.createElement("score")

// declare global variables
var timer = 60;
var timeInterval;
// starts index at 0
var i = 0;
// counter to add correct answers
var score = 0;

// When start button is clicked
startBtn.addEventListener("click", startQuiz);
openingPage()

// welome page with start button to begin game
function openingPage() {
    startText.textContent = "Welcome to the Quiz!";
    startBtn.textContent = "Start here!";
    containerEl.appendChild(startText);
    containerEl.appendChild(startBtn);
}

// start quiz
function startQuiz() {
    // timer function...........
    showTimer();
    // countdown function for next question..............
    nextQuestion();
    results.style.display = "none"
}

// The timer starts (after stat button clicked), set timer to display on screen
function showTimer() {
    // clear other timers to prevent additional countdowns
    clearInterval(timeInterval);
    // shows timer on screen
    timerDisplay.textContent = timer;
    // timer count intervals
    timeInterval = setInterval(function () {
        timer--;
        timerDisplay.textContent = timer;
        if (timer === 0) {
            endGame()
        }
    }, 1000)
}

// Presented with a question
function nextQuestion() {
    // get first question
    var currentQuestion = questions[i];
    // then empty question container
    containerEl.textContent = "";
    // add current question title to display
    questionText.textContent = currentQuestion.title;
    // append to container
    containerEl.appendChild(questionText);
    var answersDiv = document.createElement("div");
    // Loop for remaining questions
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.classList.add("choiceBtn");
        answerBtn.textContent = currentQuestion.choices[i];
        answerBtn.onclick = checkAnswer;
        answersDiv.appendChild(answerBtn);
    }
    containerEl.appendChild(answersDiv);

// tried hiding the username input page until the last page but couldn't get it to work
    // function toggleLastPage() {
    //     var results = document.getElementById("myDiv");
    //     if (results.style.display === "none") {
    //       results.style.display = "block";
    //     } else {
    //       results.style.display = "block";
    //     }
    //   }
}

// check is answer user selected is correct or not
function checkAnswer() {
    var userAnswer = this.textContent;
    // when user selects correct answer it adds a point to the socre side
    if (userAnswer === questions[i].answer) {
        score++;
        scoreDisplay.textContent = score
    // when user selects incorrect answer, time is deducted in 10 sec increments per wrong answer
    } else {
        timer -= 10;
    }
    // when all questions have been answered (before time runs out), it ends the game
    i++;
    if (i === questions.length) {
        endGame()
    } else {
        nextQuestion();
    }
}

// the game ends, the timer stops and screen clears
function endGame() {
    clearInterval(timeInterval)
    containerEl.style.display = "none"
}

// scorebord for lst page to let user enter name for saving score
// not working code, needs to be reevaluated
function showResults() {
const username = document.getElementById("username");
const savescoreBtn = document.getElementById("savescoreBtn");
const finalScore = document.getElementById("finalScore");
username.addEventListener("keyup", () => {
 })
}

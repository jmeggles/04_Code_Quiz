var questions = [
    // Random questions, choices, answer for code quiz (https://thoughtcatalog.com/samantha-newman/2020/04/funny-trivia-questions/)
    {
        title: "What is Scooby Doo's real name?",
        choices: ["Scooby Doodles", "Scoobert Doo", "Scooby the Dog", "Scooby Doo Doo"],
        answer: "Scoobert Doo"
    },
    {
        title: "In Florida only on Sundays, it is illegal for a single woman to do what?",
        choices: ["Shop", "Dance", "Skydive", "Drink a Beer"],
        answer: "Skydive"
    },
    {
        title: "How long is New Zealand’s Ninety Mile Beach?",
        choices: ["90 miles", "55 miles", "10 miles", "85 miles"],
        answer: "55 miles"
    },
    {
        title: "In California you can’t legally buy a mousetrap without having what?",
        choices: ["Photo ID", "Hunting License", "Two Arms", "Proof of Infestation"],
        answer: "Hunting License"
    },
    {
        title: "What was the first fruit that was eaten on the moon?",
        choices: ["Apple", "Strawberry", "Banana", "Peach"],
        answer: "Peach"
    },
    {
        title: "What was the ice cream cone invented for?",
        choices: ["Ice Cream", "Holding FLowers", "Cheerleader Megaphone", "Dunce Cap"],
        answer: "Holding Flowers"
    },
];


// ?? WHEN I answer a question
// ?? WHEN I answer a question incorrectly
// ?? THEN time is subtracted from the clock
// ?? WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// form

// hook elements from page (i.e var example1 = document.quesryselector(".elemet class")) 
// hook container element
var containerEl = document.querySelector(".container");

// hook timer element
var timerDisplay = document.querySelector(".timer");

// create dynamic elements
var startText = document.createElement("h1")

// creat buttone to start quiz
var startBtn = document.createElement("button");

// create p tag tp display questions
var questionText = document.createElement("p");

// declare global variables
var timer = 60;
var i = 0;


function openingPage() {
    startText.textContent = "Welcome to the Quiz!";
    startBtn.textContent = "Start here!";
    containerEl.appendChild(startText);
    containerEl.appendChild(startBtn);
}

// start quiz
function startQuiz() {
    // ............timer function...........
    showTimer();

    // ...............countdown function for next question..............
    nextQuestion();
}

// The timer starts (after stat button clicked)
function showTimer() {
    // shows timer on screen
    timerDisplay.textContent = timer;
    // timer count intervals
    var timeInterval = setInterval(function () {
        timer--;
        timerDisplay.textContent = timer;
        if (timer === 0) {
            clearInterval(timeInterval)
        }
    }, 1000)

    // decrease timer by 1 if wrong answer chosen
    // set timer to display on screen
    // if timer gets to zero, clear interval
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
        answersDiv.appendChild(answerBtn);
    }
    containerEl.appendChild(answersDiv);
}

// check answer
function checkAnswer(event) {
    if (event.target.matches(".choiceBtn")) {
        i++;
        nextQuestion();

        // ..........if answered incorrectly.................... 

    }
}


// When start button is clicked
startBtn.addEventListener("click", startQuiz);
document.addEventListener("click", checkAnswer);

openingPage()
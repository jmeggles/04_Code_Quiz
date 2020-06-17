var questions = [
    // Random questions, choices, and answers for code quiz (https://thoughtcatalog.com/samantha-newman/2020/04/funny-trivia-questions/)
    {
        title: "What is Scooby Doo's real name?",
        choices: ["Scooby Doodles", "Scoobert Doo", "Scooby the Dog", "Scooby Doo Doo"],
        answer: "Scoobert Doo",
        image: "/scooby.png"
    },
    {
        title: "In Florida only on Sundays, it is illegal for a single woman to do what?",
        choices: ["Shop", "Dance", "Skydive", "Drink a Beer"],
        answer: "Skydive",
        image: "/skydive.jpeg"
    },
    {
        title: "How long is New Zealand’s Ninety Mile Beach?",
        choices: ["90 miles", "55 miles", "10 miles", "85 miles"],
        answer: "55 miles",
        image: "/beach.jpg"
    },
    {
        title: "In California you can’t legally buy a mousetrap without having what?",
        choices: ["Photo ID", "Hunting License", "Two Arms", "Proof of Infestation"],
        answer: "Hunting License",
        image: "/mousetrap.jpg"
    },
    {
        title: "What was the first fruit that was eaten on the moon?",
        choices: ["Apple", "Strawberry", "Banana", "Peach"],
        answer: "Peach",
        image: "/peach.jpeg"
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
var questionCounter = document.createElement("tally")

// declare global variables
var timer = 60;
var timeInterval;
var i = 0;
// counter to add correct answers
var score = 0;




// When start button is clicked
startBtn.addEventListener("click", startQuiz);
// document.addEventListener("click", checkAnswer);

openingPage()





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

    // tally count for correct answers......
    // tally();
}

// The timer starts (after stat button clicked), set timer to display on screen
function showTimer() {
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
    }, 1000
    )
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
}


// attach image to answer screen
// var imgScooby = document.createElement("imgScooby");
// var imgSkydive = document.createElement("imgSkydive");
// var imgPeach = document.createElement("imgPeach");
// var imgMousetrap = document.createElement("imgMousetrap");
// var imgBeach = document.createElement("imgBeach");

function displayImage() {


}

// check answer
function checkAnswer() {

    var userAnswer = this.textContent;

    if (userAnswer === questions[i].answer) {
        console.log("correct")
        score++;
        scoreDisplay.textContent = score
    } else {
        console.log("incorrect")
        timer -= 10;
    }


    i++;
    if (i === questions.length) {
        endGame()
    } else {
        nextQuestion();
    }


    // if (event.target.matches(".choiceBtn")) {
    //     i++;
    //     console.log("answerBtn clicked", event.target.textContent)

    //     var userAnswer = event.target.textContent
    //     // if answered correctly, add a point, timer does not get affected


    //     // if answered incorrectly, no points, timer gets deducted 10 seconds



    //     nextQuestion();



    // }
}

function endGame() {
    clearInterval(timeInterval)
    console.log("game over", score)
    containerEl.style.display = "none"
}

// save player initls and score

// var testIntId;
// var testCount = 50;
// var btn = document.createElement('button')
// btn.textContent = "TEST"
// btn.onclick = testTimer

// containerEl.appendChild(btn)

// function testTimer() {
//     clearInterval(testIntId);

//     testIntId = setInterval(() => {
//         console.log(testCount);
//         testCount--;
//         if (testCount <= 0) {
//             clearInterval(testIntId)
//         }
//     }, 1 * 1000);
// }

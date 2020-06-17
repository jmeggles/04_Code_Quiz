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
];

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

// question counter to tally correct answers
var questionCounter = document.createElement("tally")

// declare global variables
var timer = 60;
var i = 0;
// counter to add correct answers
var tally = "";


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
}

// The timer starts (after stat button clicked), set timer to display on screen
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
    }, 1000

    
    
    
    
// timer countdown   
    // var seconds = 0;
    // var el = document.getElementById('seconds-counter');
    
    // function incrementSeconds() {
    //     seconds -= 1;
    //     el.innerText = "Time remaining  " + seconds + ;
    // }








    
// decrease timer by 1 if wrong answer chosen



// if timer gets to zero, clear interval
    // if (now == 0) {
    //     clearInterval(x);
    //     document.getElementById("demo").innerHTML = "EXPIRED";
    //   }


    )}


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



// trying to add css through jquery
// $ (function() {
//     $("questionText").css({color: "red"});

// });

// attach image to answer screen
function displayImage() {
    $("<img/>")
        .attr("src", "assets/images" + questions[questionCounter - 1].image)
        .appendTo('#image-holder');
}




// check answer
function checkAnswer(event) {
    if (event.target.matches(".choiceBtn")) {
        i++;
        nextQuestion();

// if answered correctly, add a point, timer does not get affected

// if answered incorrectly, no points, timer gets deducted 10 seconds

    }
}

// save player initls and score


// When start button is clicked
startBtn.addEventListener("click", startQuiz);
document.addEventListener("click", checkAnswer);

openingPage()

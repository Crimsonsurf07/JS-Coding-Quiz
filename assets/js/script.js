// Variable Declarations 
var header = document.getElementById("header");
var intro = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4= document.getElementById("4");
var finalScore= document.getElementById("finalScore");
var endMessage = document.getElementById("endMessage");
var result = document.getElementById("result");
var scoreList = document.getElementById("scorelist");


//The array of questions 
var questions = [
    { question: '"What does HTML stand for?:', 
    choice1 : "1. Hyper Text Preprocessor",
    choice2 : "2. Hyper Text Markup Language",
    choice3 : "3. Hyper Text Multiple Language",
    choice4 : "4. Hyper Tool Multi Language",
    correct: "2"
    },
    { question: "What Does CSS Stand For?", 
    choice1 : "1. Common Style Sheet",
    choice2 : "2. Colorful Style Sheet",
    choice3 : "3. Computer Style Sheet",
    choice4 : "4. Cascading Style Sheet",
    correct: "4"
    },
    { question: "What Does PHP Stand For?", 
    choice1 : "1. Hypertext Preprocessor",
    choice2 : "2. Hypertext Programming",
    choice3 : "3. Hypertext Preprogramming",
    choice4 : "4. Hometext Preprocessor",
    correct: "1"
    },
    { question: "What Will This Return?<br> Boolean(5 < 7", 
    choice1 : "1. false",
    choice2 : "2 NaN",
    choice3 : "3. true",
    choice4 : "4. SyntaxError",
    correct: "3"
    },
    { question: "Which JavaScript label catches all the values, except for the ones specified?", 
    choice1 : "1. catch",
    choice2 : "2. label",
    choice3 : "3. try",
    choice4 : "4. default",
    correct: "4"
    },
    { question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?", 
    choice1 : "1. if(x 2)",
    choice2 : "2. if(x = 2)",
    choice3 : "3. if(x == 2)",
    choice4 : "4. if(x != 2)",
    correct: "3"
    },
    { question: "JavaScript Is A ____-side programming language.", 
    choice1 : "1. Server",
    choice2 : "2. Client",
    choice3 : "3. Both",
    choice4 : "4. None",
    correct: "3"
    },
    { question: "What Does The DOM Stand For", 
    choice1 : "1. Double On Math",
    choice2 : "2. Digital Order Manipulation",
    choice3 : "3. Document Object Model",
    choice4 : "4. Document Oriented Method",
    correct: "3"
    },
]  

question.style.color = "ghostwhite";

//Challenge Page
intro.style.display = "block";
quiz.style.display = "none";
finalScore.style.display = "none";

//Variable for Start Quiz Button
var startBtn = document.getElementById("startBtn");

// Listener Event to write password on click of "Start Quiz" button
startBtn.addEventListener("click", startGame);


// Timer Function Begin
var timeLeft = 75;
var startScore = 0;
var timer = document.getElementById("timer");
timer.style.color = 'aquamarine';

timer.textContent = "Time: " + startScore + "s";

// Start Game
function startGame() {
    quiz.style.display = "block";
    question.style.display ="block";
    header.style.display = "block";
    intro.style.display = "none";
    finalScore.style.display = "none";


    var timeInterval = setInterval(function() {
        timer.textContent = "Time:" + timeLeft + "s";
        timeLeft-=1;

        if(timeLeft === 0 || questions.length === runningQuestionIndex+1)  {
            resultRender();
            clearInterval(timeInterval);
            timer.textContent = "Time:" + timeLeft + "s";
         }
    }, 1000);

    renderQuestion();
};

// Display Questions 
var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;    

function renderQuestion() {
    var q = questions[runningQuestionIndex];
    question.innerHTML = q.question;
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
};

// Check Answers
function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        answerOutput.textContent = "Correct!"
    }
    else {
       answerOutput.textContent = "Wrong!"
       timeLeft -=10;
    }

    if (questions.length === runningQuestionIndex+1) {
        resultRender(); // If it has gone through all questions, show final score
        return;
    }
        runningQuestionIndex++;
        renderQuestion();
    };   

//Score Quiz
function resultRender() {
   quiz.style.display = "none";
   intro.style.display = "none";
   finalScore.style.display = "block";

   if (timeLeft === 0 || questions.length -1) { 
    result.textContent = "Your final score is " + timeLeft + ".";
   }
};

//Capture Score and Initials 
userInfo.addEventListener("click", function() {
    var contactInfo = document.getElementById("contactInfo").value;

    localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
    localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
    
    loadScores();
    });

// Create function for timer
var quizArray = [
    {
        question:"placeholder", 
        choices:["A", "B", "C", "D"],
        correct:"C"
    },
    {
        question:"placeholder2", 
        choices:["A", "B", "C", "D"],
        correct:"C"
    },
    {
        question:"placeholder3", 
        choices:["A", "B", "C", "D"],
        correct:"C"
    },
    {
        question:"placeholder4", 
        choices:["A", "B", "C", "D"],
        correct:"C"
    },
    {
        question:"placeholder5", 
        choices:["A", "B", "C", "D"],
        correct:"C"
    },
]

var arrayIndex = 0
//Create function for arrayIndex++ to propel user through the questions
//
var startBtn = document.querySelector(".start-btn");
var quizHeader = document.querySelector(".header");
var quizQuestions = document.querySelector("#quiz-questions");
var questionTitles = document.querySelector(".question-title");
var questionChoices = document.querySelector(".choices");

//add event listener to access quiz
startBtn.addEventListener("click", function (){
    quizHeader.classList.add("hidden");
    quizQuestions.classList.remove("hidden");
    quizProgression();
})

function quizProgression(){
    questionTitles.textContent=quizArray[arrayIndex].question;
    questionChoices.innerHTML="";
    quizArray[arrayIndex].choices.forEach(function(choice){
        var li = document.createElement("li")
        li.textContent=choice;
        li.onclick=checkAnswer;
        questionChoices.append(li);
    })
}
//This function is to check the answer and push 
function checkAnswer(){
    console.log(this);
    if (this.textContent===quizArray[arrayIndex].correct) {
        console.log("correct")        
    } else {
        console.log("wrong")
    }
    arrayIndex++;
    quizProgression();
}
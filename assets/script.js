//Declared variables here
var startBtn = document.querySelector(".start-btn");
var quizHeader = document.querySelector(".header");
var quizQuestions = document.querySelector("#quiz-questions");
var questionTitles = document.querySelector(".question-title");
var questionChoices = document.querySelector(".choices");

//Created array to dynamically change quiz questions and answer choices as JS pushes user through the quiz
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

//add event listener to access quiz after 'start' button is clicked
startBtn.addEventListener("click", function (){
    quizHeader.classList.add("hidden");
    quizQuestions.classList.remove("hidden");
    quizProgression();
})

//This function provides the questions to the user and allows for answer choice selection
function quizProgression(){
    questionTitles.textContent=quizArray[arrayIndex].question;
    questionChoices.innerHTML="";
    quizArray[arrayIndex].choices.forEach(function(choice){
        var li = document.createElement("li")
        li.textContent=choice; //set this as li so it appears as the list beneath the quiz question
        li.onclick=checkAnswer;
        questionChoices.append(li);
    })
}
//This function is to check the answer and push user forward through quiz after answer choice is selected
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
// Create function for timer
setInterval(function countdown() {
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
})
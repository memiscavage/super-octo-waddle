//Declared variables here
var startBtn = document.querySelector(".start-btn");
var quizHeader = document.querySelector(".header");
var quizQuestions = document.querySelector("#quiz-questions");
var questionTitles = document.querySelector(".question-title");
var questionChoices = document.querySelector(".choices");
var submitBtn = document.querySelector("#submit-btn");
var score = 0;
var finalScore = document.querySelector("#finalScore")

//Created array to dynamically change quiz questions and answer choices as JS pushes user through the quiz
var quizArray = [
    {
        question:"Legumes are rich in which nutrients?", 
        choices:["A. Protein", "B. Iron", "C. Fiber", "D. All of the above"],
        correct:"D. All of the above"
    },
    {
        question:"Which vitamin helps your body absorb more iron?", 
        choices:["A. Vitamin K", "B. Vitamin A", "C. Vitamin C", "D. Vitamin B"],
        correct:"C. Vitamin C"
    },
    {
        question:"What is the daily recommended serving size for vegetables for adults?", 
        choices:["A. 5 cups", "B. 1 cup", "C. 2.5 cups", "D. 1.5 cups"],
        correct:"C. 2.5 cups"
    },
    {
        question:"On average, how many calories does a breastfeeding person burn in a day?", 
        choices:["A. 600 calories", "B. 300 calories", "C. 250 calories", "D. 400 calories"],
        correct:"A. 600 calories"
    },
    {
        question:"How many grams of sugar are in a medium-sized banana?", 
        choices:["A. 2 grams", "B. 14 grams", "C. 8 grams", "D. 25 grams"],
        correct:"B. 14 grams"
    },
]
var arrayIndex = 0

//add event listener to access quiz after 'start' button is clicked
startBtn.addEventListener("click", function (){
    quizHeader.classList.add("hidden");
    quizQuestions.classList.remove("hidden");
    quizProgression();
    //quizTimer(); -- commented out as this broke the countdown for wrong answers. Will return to fix and resubmit
})

//This function provides the questions to the user and allows for answer choice selection
function quizProgression(){
    if (arrayIndex < quizArray.length) {    
    questionTitles.textContent=quizArray[arrayIndex].question;
    questionChoices.innerHTML="";
    quizArray[arrayIndex].choices.forEach(function(choice){
        var li = document.createElement("li")
        li.textContent=choice; //set this as li so it appears as the list beneath the quiz question
        li.onclick=checkAnswer;
        questionChoices.append(li);
    })
} else {
    questionTitles.textContent="You've completed the quiz! 🎉";
    questionChoices.textContent="";
    submitBtn.classList.remove("hidden");
    finalScore.classList.remove("hidden");
    finalScore.textContent=("Final score: ", score);
}}


//This function is to check the answer and push user forward through quiz after answer choice is selected
function checkAnswer(){
    console.log(this);
    if (this.textContent===quizArray[arrayIndex].correct) {
        score++;
        console.log("Correct!")        
    } else {
        countDown = countDown-10; //This line is to remove 10 seconds for incorrect answers
        console.log("Incorrect")
    }
    arrayIndex++;
    quizProgression();
    console.log("Score:", score)
}

// Create function for timer
//function quizTimer(){ --- commented it out as it broke my countdown for wrong answers
var countDown = 60;
var interval = setInterval(function(){
    document.querySelector('.countDown').textContent=countDown;
    countDown--;
    if (countDown === 0){
        clearInterval(interval);
        alert("Time is up!");
        questionTitles.textContent="Your time is up.";
        questionChoices.textContent="Please try again."
        finalScore.textContent=("Final score: ", score);
    }
}, 1000);//}

submitBtn.addEventListener("click", function (){
   endQuiz();
})

//Create function to display and save score -- will complete for resubmittion
function endQuiz(){
   
}
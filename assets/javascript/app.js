    
//object contains 6 properties questions - 4 options - answers
var questions = [{
    "question": "Who is the chosen one?",
    "option1": "Trinity",
    "option2": "Neo",
    "option3": "Morpheus",
    "option4": "Cypher",
    "asnwer": "2",
}, {
    "question": "What was Morpheus's hovercrafts name?",
    "option1": "Matrix",
    "option2": "Icarus",
    "option3": "Logos",
    "option4": "Nebuchadnezzar",
    "asnwer": "4", 
}, {
    "question": "What color was the pill the Mr. Anderson took?",
    "option1": "Red Pill",
    "option2": "Yellow Pill",
    "option3": "White Pill",
    "option4": "Blue Pill",
    "asnwer": "1" 
}, {
    "question": "How many films were made in the Matrix collection? (Tricky One)",
    "option1": "3",
    "option2": "4",
    "option3": "5",
    "option4": "6",
    "asnwer": "4"
}, {
    "question": "Which Agent became a virus?",
    "option1": "Johnson",
    "option2": "Anderson",
    "option3": "Smith",
    "option4": "Simpson",
    "asnwer": "3"
}
]


//index of current question
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var questionEl = document.getElementById("question");

//access to element

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextbutton");
var resultCont = document.getElementById("result");

//load question from the question index
function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + ". " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

loadQuestion(0);

function loadNextQuestion () {
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption) {
        alert("Please select your answer!");
        return;
    }
//verifying if the asnwers are the same
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer) {
        score += 20;        
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1) {
        nextButton.textContent = "Finish";
    }
    //hide container when questions are finished
    if(currentQuestion == totQuestions) {
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent =  "Your Score: " + score;
        return;        
    }

    loadQuestion(currentQuestion);
    



}

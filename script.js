//Adia's Cosmic Code Quiz 
console.log("script");
function initalquiz() {
var timeleft = 0;
   
  //Declaring variables currentquestion and score with an ID element, along with mytarget.addEventListeners.    
 var currentquestion = document.getElementById("id-of-dom-item");
currentquestion.addEventListener("click",currentquestion)
var score = document.getElementById("id-of-dom-item");  
 score.addEventListener("click",score)     
    
//Declare the variables for Code Quiz-This is the puescode
var cosmiccodequiz  = document.getElementById("cosmic code quiz");                                
var questionGoSubmit = document.getElementById("results");
var timeleft = document.getElementById("timeleft");
var challengequestions = document.getElementById("challengequestions.length");
var submitbutton = document.getElementById("submit-initials");
var startbutton = document.getElementById("startbutton");
var starttimer = document.getElementById("starttimer");
var endtimer = document.getElementById("end")
var beginquiz = document.getElementById("begin");

var highScores =[]
 if (JSON.parse(localStorage.getItem('scores')) !== null) {
  highScores = JSON.parse(localStorage.getItem("scores"));
 }
    
//Declaring time interval variables
var currentquestion =1;
var score = 0;
var secondsLeft = 75;
var currentindex = 0;
}

// Formed a startbutton and submitbutton function, declaring variables with an ID element
function startbutton() {
var startbutton = document.getElementById("id-of-dom-item");
  startbutton.addEventListener("click",startbutton)
}

function submitbutton() {
 var submitbutton = document.getElementById("id-of-dom-item");
  submitbutton.addEventListener("click",submitbutton)
}

//Formed a startquiz function
function startquiz () {
  beginquiz.setAttribute("class","container d-none");
//Declare row, column, header, button variables.
var row = null;
var column = null;
var header = null;
var button = null;
  cosmiccodequiz.setAttribute("class","container");
 timeleft=challengequestions * 15;
 timeleft.setAttribute("value",timeleft);
 
 //  Method for stopping the interval 
  //Formed a setInterval function
  var myInterval = setInterval(function() {
 if (timeleft<1) { clearInterval(myInterval);
 //  When timer ends, then the user put their initials
 cosmiccodequiz.setAttribute("class","container d-none");
 score.setAttribute("class", "container")
 submitbutton.setAttribute("class","container");
 return;
 }
 timeleft = timeleft - 1;
 timeleft.setAttribute("value",timeleft);
  },1000);

}
var TimeOut = false;
function CreateNewQuestion(currentQuestion) {
 //  When the header forms a new question, it give possible answers
  cosmiccodequiz.innerHTML = "";
 row = document.createElement("div");
 row.setAttribute("class","row");
 cosmiccodequiz.append(rowEl);

 column = document.createElement("div");
 column.setAttribute("class","col-0 col-sm-2");
 row.append(column);

 column = document.createElement("div");
 column.setAttribute("class","col-12 col-sm-8");
 row.append(column);

column = document.createElement("div");
column.setAttribute("class","col-0 col-sm-2");
 row.append(column);

column = row.children[1];
row = document.createElement("div");
row.setAttribute("class","row mb-3");
column.append(row);

column = document.createElement("div");
 column.setAttribute("class","col-12");
row.append(column);

 header = document.createElement("h2");
 header.innerHTML = questions[questionNum-1].title;
 column.append(header);

 column = cosmiccodequiz.children[0].children[1];
 for (var i=0; i<4; i++) {
 var row = document.createElement("div");
 row.setAttribute("class","row mb-1");
 column.append(row);

var column2 = document.createElement("div");
column.setAttribute("class","col-12");
row.append(column2);

button = document.createElement("button");
button.setAttribute("class","btn btn-primary");
 button.setAttribute("type","button");
 button.innerHTML = questions[currentquestion-1].choices[i];
 column2.append(button);
 button.addEventListener("click",function(){

 //  When the user clicks one of the answer buttons, then it would have a display message "Yes! You got it!" If incorrect, then the seconds would be deducted 
 if (clickTimeout) {
  return;
 }
clickTimeOut = true;
 clearInterval(myInterval);
column = cosmiccodequiz.children[0].children[1];
row = document.createElement("div");
row.setAttribute("class","row border-top"); column.append(row);

column = document.createElement("div");
column.setAttribute("class","col-12");
row.append(column);

button = document.createElement("button");
 button.setAttribute("class","btn btn-primary");
 button.setAttribute("type","button");
 button.innerHTML = questions[currentquestion-1].choices[i];
  column.append(button);
 button.addEventListener("click",function(){
 
 //  When the user clicks the anwers buttons, the message is displayed. If it is correct,  15 seconds is deducted from the timer
  if (clickTimeout) {
  return;
   }   

 clickTimeOut = true;
 clearInterval(myInterval);
 var column = cosmiccodequiz.children[0].children[1];
  var row = document.createElement("div");
 row.setAttribute("class","row border-top");
 column.append(row);

column = document.createElement("div");
 column.setAttribute("class","col-12");
 row.append(column);

var paragraph  = document.createElement("p");
column.append(paragraph);
if (this.innerHTML === questions[currentQuestion - 1].answer) {
 paragraph.innerHTML = "Yes, You got it!";
} else {
 paragraph.innerHTML = "You missed that one. Try it again.";
 timeleft = timeleft - 15;
 if (timeleft < 0) {
 timeleft = 0;
 }}}
                         
 ). timeleft.setAttribute("value", timeleft);
  currentquestion++;
  if (currentquestion>challengequestions.length) {
 score = timeleft;
  }
 
 //Formed a TimeOut function
  TimeOut (function() {
 // When the answer is selected, it moves on to new question after timer hits 2 seconds
  if (currentquestion>challengequestions) {
  //  results
cosmiccodequiz.setAttribute("class","container d-none");
submitbutton.setAttribute("class","container");
  score.setAttribute("value",score);
 } else {
 CreateNewQuestion(currentquestion);
TimeOut = false;

 myInterval = setInterval(function() {
if (timeleft<1) {
clearInterval(myInterval);
 cosmiccodequiz.setAttribute("class","container d-none");
 score.setAttribute("class","container");
  return;
   }
    
  timeleft = timeleft - 1;
 timeleft.setAttribute("value", timeleft);
 },1000);
 }
 },2000);
});
}}

//Formed a function saveHighScore
function saveHighScore() {
 var initials = document.getElementById("initials-entry");
 var newHighScore = {
  initials: initialsEl.value,
  highScore: score
  };

   console.log(newHighScore);
 highScores.push(newHighScore);
 console.log(highScores);
 localStorage.setItem("scores",JSON.stringify(highScores));
}

CreateNewQuestion(currentquestion);
var submitbutton = document.getElementById("submit-initials");
cosmiccodequiz.setAttribute("class","container d-none");
questionGoSubmit.setAttribute("class","container d-none");
score.setAttribute("class","container");

var column = document.getElementById("highscore-table");
for (i=0; i<Highscores.length; i++) {
 var row = document.createElement("div");
 row.setAttribute("class","row mb-1");
 column.append(row);

var column2 = document.createElement("div");
 column2.setAttribute("class","col-12 text-center");
 row.append(column2);

var paragraph = document.createElement("div");
paragraph.innerHTML = "Initials: " + highScores[i].initials + "   Score: " + highScores[i].highScore;
 column2.append(paragraph);
  
// Formed add.Eventlisteners at the bottom of my code
submitbutton.addEventListener("click",submit-initials);
startbutton.addEventListener("click",startbutton);
startbutton.addEventListener("click",startquiz);  
score.addEventListener("click",function() {
})};

initalquiz();
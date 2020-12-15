//Adia's Cosmic Code Quiz
$(document).ready(function(){
     $("#id begin").click();
     $("#id submit-initials").click();
});;
    console.log("script");

 //Declaring variables currentquestion and score, along with mytarget.addEventListeners.    
var currentquestion = $("#id currentquestion");
var score = $("#id score");  
     
//Declare the variables for Code Quiz-This is the puescode
var cosmiccodequiz  = $("#id cosmic code quiz");                                
var questionGoSubmit = $("#id results");
var timeleft = $("#id timeleft");
var challengequestions = $("#id challengequestions.length");
var submitbutton = $("#id id submit-initials");
var startbtn = $("#id begin");
var starttimer = $("#id starttimer");
var endtimer = $("#id endtimer")
var startquiz = $("#id startquiz");
var resetquiz = $("#id resetquiz");

var highScores =$("[]")
 if (JSON.parse(localStorage.getItem('scores')) !== null) {
  highScores = JSON.parse(localStorage.getItem("scores"));
 }
  
//Declaring time interval variables
var currentquestion = 1;
var score = 0;
var secondsLeft = 75;
var currentindex = 0;

//Formed a startbutton with mytarget.addeventlistener
function bindStartButton() {
    var startbtn = $("#id begin");
$(".class startbtn").click(function () {
  console.log("Start Quiz!");
})}
                          
var timeleft = 0;
   

// Formed a startbutton, submitbutton functions, declaring variables with an ID element
function startbtn() {
var startbtn = $("id-of-dom-item");
}

function submitbtn() {
 var submitbtn = $("id-of-dom-item");
}
function resetquiz() {
   var resetquiz = $("id-of-dom-item");
}
//Formed a startquiz function
function startquiz () {
 $(".class beginquiz").attr("class","container d-none");
//Declare row, column, header, button variables.
var row = null;
var column = null;
var header = null;
var button = null;
 $(".class cosmiccodequiz").attr("class","container");
 timeleft=challengequestions * 15;
 $(".class timeleft").attr("value",timeleft);
 
 //  Method for stopping the interval 
  //Formed a setInterval function
 var myInterval = $setInterval(function() {
 if (timeleft<1) { clearInterval(myInterval);


 //  When timer ends, then the user put their initials
 $(".class cosmiccodequiz").attr("class","container d-none");
 $(".class score").attr("class","container");
 $(".class submitbtn").attr("class","container");
 return;
 }
 timeleft = timeleft - 1;
 $(".class timeleft").attr("value",timeleft);
  },1000);

}
var TimeOut = false;
function CreateNewQuestion(currentquestion) {

 //  When the header forms a new question, it give possible answers
  $(".class cosmiccodequiz").html("");
 row = $("<element div>");
 $(".class row").attr("class","row");
$("#id cosmiccodequiz").append("row");

 column = $("<element div>");
 $(".class column").attr("class","col-0 col-sm-2");
 $("#id row").append("column");

 column = $("<element div>");
 $(".class column").attr("class","col-12 col-sm-8");
 $("#id row").append("column");

column = $("<element div>");
$(".class column").attr("class","col-0 col-sm-2");
 $("#id row").append("column");

column = $(".class row").children[1];
row = $("<element div>");
$(".class row").attr("class","row mb-3");
$("#id column").append("row");

column = $("<element div>");
 $(".class column").attr("class","col-12");
$("#id row").append("column");

 header = $("#id h2");
 $(".class header").html(questions[questionNum-1].title);
 $("#id column").append("header");

 column = $(".class cosmiccodequiz").children[0].children[1];
 for (var i=0; i<4; i++) {
 var row = $("<element div>");
 $(".class row").attr("class","row mb-1");
 ("#id column").append("row");

var column2 = $("<element div>");
(".class column").attr("class","col-12");
("#id row").append("column2");

button = $("#button");
$(".class button").attr("class","btn btn-primary");
$(".class button").attr("type","button");
$(".class button").html("questions[currentquestion-1].choices[i]");
$("#id column2").append("button");
$(".class button").click(function() {

 //  When the user clicks one of the answer buttons, then it would have a display message "Yes! You got it!" If incorrect, then the seconds would be deducted 
 if (clickTimeout) {
  return;
 }
clickTimeOut = true;
 clearInterval(myInterval);
column = $(".class cosmiccodequiz").children[0].children[1];
row = $("<element div>");
$(".class row").attr("class","row border-top"); 
$("#id column").append("row");

column = $("<element div>");
("column").attr("class","col-12");
$("#id row").append("column");

button = $("#id button");
$(".class button").attr("class","btn btn-primary");
 $(".class button").attr("type","button");
 $(button).html("questions[currentquestion-1].choices[i]");
 $("#id column").append("button");
 $(".class button").click(function() {
 
 //  When the user clicks the anwers buttons, the message is displayed. If it is correct,  15 seconds is deducted from the timer
  if (clickTimeout) {
  return;
   }   

 clickTimeOut = true;
 clearInterval(myInterval);
 var column = $(".class cosmiccodequiz").children[0].children[1];
 var row = $("<element div>");
 $(".class row").attr("class","row border-top");
 $("#id column").append("row");

column = $("<element div>");
 $(".class column").attr("class","col-12");
 $("#id row").append("column");

var paragraph  = $("#id p");
$("#id column").append("paragraph");
if ($("this").innerHTML === questions[currentquestion - 1].answer) {
 $("#id paragraph").html("Yes, You got it!");
} else {
 $("#id paragraph").html("You missed that one. Try it again");
 timeleft = timeleft - 15;
 if (timeleft < 0) {
 timeleft = 0;
 }}}
                         
 ).$(".class timeleft").attr("value", timeleft);
  currentquestion++;
  if (currentquestion>challengequestions.length) {
 score = timeleft;
  }
 
 //Formed a TimeOut function
  TimeOut (function() {
 // When the answer is selected, it moves on to new question after timer hits 2 seconds
  if (currentquestion>challengequestions) {
  //  results
$(".class cosmiccodequiz").attr("class","container d-none");
$(".class submitbtn").attr("class","container");
  $(".class score").attr("value",score);
 } else {
 CreateNewQuestion(currentquestion);
TimeOut = false;

 myInterval = $setInterval(function() {
if (timeleft<1) {
clearInterval(myInterval);
 $(".class cosmiccodequiz").attr("class","container d-none");
 $(".class score").attr("class","container");
  return;
   }
    
  timeleft = timeleft - 1;
 $(".class timeleft").attr("value", timeleft);
 },1000);
 }
 },2000);
});
}}

//Formed a function saveHighScore
function saveHighScore() {
 var initials = $("initials-entry");
 var newHighScore = {
  initials: initialsEl.value,
  highScore: score
  };

console.log("newHighScore");
 highScores.push(newHighScore);
 console.log("highScores");
 localStorage.setItem("scores",JSON.stringify(highScores));
}

CreateNewQuestion(currentquestion);
var submitbtn = $("#id submit-initials");
$(".class cosmiccodequiz").attr("class","container d-none");
$(".class questionGoSubmit").attr("class","container d-none");
$(".class score").attr("class","container");

var column = $("#id highscore-table");
for (i=0; i<Highscores.length; i++) {
 var row = $("<element div>");
$(".class row").attr("class","row mb-1");
 $("#id column").append("row");
 
var column2 = $("<element div>");
 $(".class column2").attr("class","col-12 text-center");
 ("#id row").append("column2");

var paragraph = $("<element div>")
$("#id paragraph").html("Initials: " + highScores[i].initials + "   Score: " + highScores[i].highScore);
 $("#id column2").append("paragraph");
  
// Formed add.Eventlisteners for functions at the bottom of my code
$(".class submitbtn").click(function () {
 console.log("Submitted!");
 },
             
$(".class startbtn").click(startquiz)); 
 console.log("Begin!");  

$(".class score").click(function() {
 console.log("This score is yours!");
})
 
$(".class currentquestion").click(function () {
 console.log("Next Question...");
},
                                 
$(".class resetquiz").click(function () {
 console.log("Restart!");
})

return initalquiz();
}


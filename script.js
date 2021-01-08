//Adia's Cosmic Code Quiz
//Attached all my listeners inside of the ready function for jquery 
$(document).ready(function(){
    $(".currentquestion").on("click", function () {  });
    console.log("This score is yours!");
    });

    $(".score").on("click", function () {
    console.log("Next Question...");
    });
    
    $(".highscoreButton").on("click", function () {
    console.log("Scores revealed!");
   });

   $(".submitbtn").on("click", function () {
    console.log("Submitted!");
    });  
        
     $(".resetquiz").on("click", function () {
     console.log("Restart!");
    });

    $("#begin").click();
    $("#submit-initials").click();    
   
   //Added consolelog to load the script of the page
    console.log("script");

//Declaring variables currentquestion and score,.    
var currentquestion = $("#currentquestion");
var score = $("#score");  
var highscoreButton = $("#highscore-button");

    
//Declare the variables for Code Quiz-This is the puescode
var cosmiccodequiz = $("#cosmiccodequiz");                                
var questionGoSubmit = $("#results");
var timeleft = $("#timeleft");
var challengequestions = $("#challengequestions.length");
var submitbtn = $("#submit-initials");
var startbtn = $("#begin");
var starttimer = $("#starttimer");
var endtimer = $("#endtimer")
var startquiz = $("#startquiz");
var resetquiz = $("#resetquiz");

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
var startbtn = $("#begin");
 $(".startbtn").on("click", function () {
 console.log("Start Quiz!");
})}
                         
var timeleft = 0;
  

// Formed ,submitbutton functions, declaring variables with an ID element

function submitbtn() {
var submitbtn = $("#submit-initials");
}
function resetquiz() {
  var resetquiz = $("#resetquiz");
}
//Formed a startquiz function


function startquiz () {
$(".beginquiz").attr("class","container d-none");
//Declare row, column, header, button variables.
var row = null;
var column = null;
var header = null;
var button = null;
$(".cosmiccodequiz").attr("class","container");
timeleft=challengequestions * 15;
$(".timeleft").attr("value",timeleft);

//  Method for stopping the interval 
 //Formed a setInterval function
var myInterval = $setInterval(function() {
if (timeleft<1) { clearInterval(myInterval);


//  When timer ends, then the user put their initials
$(".cosmiccodequiz").attr("class","container d-none");
$(".score").attr("class","container");
$(".submitbtn").attr("class","container");
return;
}
timeleft = timeleft - 1;
$(".timeleft").attr("value",timeleft);
 },1000);

}
var TimeOut = false;
function CreateNewQuestion(currentquestion) {

//  When the header forms a new question, it give possible answers
 $(".cosmiccodequiz").html("");
row = $("<element div>");
$(".class row").attr("class","row");
$("#cosmiccodequiz").append("row");

column = $("<element div>");
$(".column").attr("class","col-0 col-sm-2");
$("#row").append("column");

column = $("<element div>");
$(".column").attr("class","col-12 col-sm-8");
$("#row").append("column");

column = $("<element div>");
$(".column").attr("class","col-0 col-sm-2");
$("#row").append("column");

column = $(".row").children[1];
row = $("<element div>");
$(".row").attr("class","row mb-3");
$("#column").append("row");

column = $("<element div>");
$(".column").attr("class","col-12");
$("#row").append("column");

header = $("#h2");
$(".header").html(questions[questionNum-1].title);
$("#column").append("header");

column = $(".class cosmiccodequiz").children[0].children[1];
for (var i=0; i<4; i++) {
var row = $("<element div>");
$(".row").attr("class","row mb-1");
("#column").append("row");

var column2 = $("<element div>");
(".column").attr("class","col-12");
("#row").append("column2");

button = $("#button");
$(".button").attr("class","btn btn-primary");
$(".button").attr("type","button");
$(".button").html("questions[currentquestion-1].choices[i]");
$("#column2").append("button");
$(".button").on("click", function () {

//  When the user clicks one of the answer buttons, then it would have a display message "Yes! You got it!" If incorrect, then the seconds would be deducted 
if (clickTimeout) {
 return;
}
clickTimeOut = true;
clearInterval(myInterval);
column = $(".cosmiccodequiz").children[0].children[1];
row = $("<element div>");
$(".row").attr("class","row border-top"); 
$("#column").append("row");

column = $("<element div>");
(".column").attr("class","col-12");
$("#row").append("column");

button = $("#button");
$(".button").attr("class","btn btn-primary");
$(".button").attr("type","button");
$(".button").html("questions[currentquestion-1].choices[i]");
$("#column").append("button");
$(".button").on("click", function () {

//  When the user clicks the anwers buttons, the message is displayed. If it is correct,  15 seconds is deducted from the timer
 if (clickTimeout) {
 return;
  }   

clickTimeOut = true;
clearInterval(myInterval);
var column = $(".cosmiccodequiz").children[0].children[1];
var row = $("<element div>");
$(".row").attr("class","row border-top");
$("#column").append("row");

column = $("<element div>");
$(".column").attr("class","col-12");
$("#row").append("column");

var paragraph  = $("#p");
$("#column").append("paragraph");
if ($("this").innerHTML === questions[currentquestion - 1].answer) {
$("#paragraph").html("Yes, You got it!");
} else {
$("#paragraph").html("You missed that one. Try it again");
timeleft = timeleft - 15;
if (timeleft < 0) {
timeleft = 0;
}}}
                        
).$(".timeleft").attr("value", timeleft);
 currentquestion++;
 if (currentquestion>challengequestions.length) {
score = timeleft;
 }

//Formed a TimeOut function
 TimeOut (function() {
// When the answer is selected, it moves on to new question after timer hits 2 seconds
 if (currentquestion>challengequestions) {
 //  results
$(".cosmiccodequiz").attr("class","container d-none");
$(".submitbtn").attr("class","container");
 $(".score").attr("value",score);
} else {
CreateNewQuestion(currentquestion);
TimeOut = false;

myInterval = $setInterval(function() {
if (timeleft<1) {
clearInterval(myInterval);
$(".cosmiccodequiz").attr("class","container d-none");
$(".score").attr("class","container");
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
var initials = $("#initials-entry");
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
var submitbtn = $("#submit-initials");
$(".cosmiccodequiz").attr("class","container d-none");
$(".questionGoSubmit").attr("class","container d-none");
$(".class score").attr("class","container");

var column = $("#highscore-table");
for (i=0; i<Highscores.length; i++) {
var row = $("<element div>");
$(".row").attr("class","row mb-1");
$("#column").append("row");

var column2 = $("<element div>");
$(".column2").attr("class","col-12 text-center");
("#row").append("column2");

var paragraph = $("<element div>")
$("#paragraph").html("Initials: " + highScores[i].initials + "   Score: " + highScores[i].highScore);
$("#column2").append("paragraph");

initalquiz();
}
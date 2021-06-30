// SideBar Help: https://www.w3schools.com/howto/howto_js_collapse_sidepanel.asp
//https://letsfindcourse.com/technical-questions/javascript-mcq/javascript-mcq-questions-1
// Assignment Code
var correctChoice = "";
var correct = 0;
var wrong = 0;
var questions = 0;
var highScores = JSON.parse(localStorage.getItem("highScores"));
for(key in highScores){
  console.log(key + ": " + highScores[key]);
}
if(highScores === null){
  var highScores = {};
}
console.log(highScores);
var cueCard = [
  {
    "Question" : "Which of the following is not JavaScript Data Types?", 
    "Choices" : ["Undefined", "Number", "Boolean", "Float"], 
    "Correct" : "Float",
    "Why": "Following are the JavaScript Data types: Number, String ,Boolean, Object, Undefined",
    "Answered": 0
  },
  {
    "Question" : "Which company developed JavaScript?", 
    "Choices" : ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"], 
    "Correct" : "Netscape",
    "Why": "Netscape is the software company who developed JavaScript.",
    "Answered": 0
  },
  {
    "Question" : "Inside which HTML element do we put the JavaScript?", 
    "Choices" : ["\< script \>","\< head \>","\< meta \>","\< style \>"], 
    "Correct" : "\< script \>",
    "Why": "\< script \> is the element where we put the javascript.",
    "Answered": 0
  },
  {
    "Question" : "Choose the correct JavaScript syntax to change the content of the following HTML code.", 
    "Choices" : ["document.getElement (\“letsfindcours\").innerHTML = \"I am a letsfindcourse\";", "document.getElementById (\“letsfindcourse\").innerHTML = \"I am a letsfindcourse\";", "document.getId (\“letsfindcourse\") = \"I am a letsfindcourse\";", "document.getElementById (\“letsfindcourse\").innerHTML = I am a letsfindcourse;"], 
    "Correct" : "document.getElementById (\“letsfindcourse\").innerHTML = \"I am a letsfindcourse\";",
    "Why": "The correct syntax to access the element is document.getElementById(\"letsfindcourse\"). Here we want to access the content written under that id",
    "Answered": 0
  },
  {
    "Question" : "Which of the following is the correct syntax to display \"Letsfindcourse\" in an alert box using JavaScript?", 
    "Choices" : ["alert-box(\"Letsfindcourse\");", "confirm(\"Letsfindcourse\");", "msgbox(\"Letsfindcourse\");", "alert(\"Letsfindcourse\");"], 
    "Correct" : "alert(\"Letsfindcourse\");",
    "Why": "To display any text in the alert box, you need to write it as alert(\"Letsfindcourse\");",
    "Answered": 0
  },
  {
    "Question" : "What is the correct syntax for referring to an external script called \"LFC.js\"?", 
    "Choices" : ["\< script src=\"LFC.js\" \>", "\< script source=\"LFC.js\" \>", "\< script ref=\"LFC.js\" \>", "\< script type=\"LFC.js\" \>"], 
    "Correct" : "\< script src=\"LFC.js\" \>",
    "Why": "The \"src\" term is used to refer to any JavaScript file.",
    "Answered": 0
  },
  {
    "Question" : "Which of the following is not Javascript frameworks or libraries?", 
    "Choices" : ["Polymer", "Meteor", "Cassandra", "jQuery"], 
    "Correct" : "Cassandra",
    "Why": "Cassandra is a distributed database from Apache.So the option C is not Javascript frameworks or libraries.",
    "Answered": 0
  },
  {
    "Question" : "Why so JavaScript and Java have similar name?", 
    "Choices" : ["JavaScript is a stripped-down version of Java", "JavaScript's syntax is loosely based on Java's", "They both originated on the island of Java", "None of the above"], 
    "Correct" : "JavaScript's syntax is loosely based on Java's",
    "Why": "Because JavaScript's syntax is loosely based on Java's that's why JavaScript and Java have similar name.",
    "Answered": 0
  },
  {
    "Question" : "What is the original name of JavaScript?", 
    "Choices" : ["LiveScript", "EScript", "Mocha", "JavaScript"], 
    "Correct" : "Mocha",
    "Why": "The project was originally called Mocha, then renamed to LiveScript, and finally to JavaScript when Netscape and Sun did a license agreement. The idea at the time was to make it a scripting language complimentary to Java.",
    "Answered": 0
  },
  {
    "Question" : "JavaScript is designed for following purpose?", 
    "Choices" : ["to style HTML pages", "to execute Queries related to databases on a server", "to add interactivity to html pages", "All of the above"], 
    "Correct" : "All of the above",
    "Why": " JavaScript is designed for the following purpose: to style HTML pages b. to execute Queries related to databases on a server c. to add interactivity to html pages d. to perform server side scripting operations e. none of the above JavaScript statements are terminated by a a.",
    "Answered": 0
  }
]

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("highScoreSide").style.width = "400px";
  document.getElementById("highScoreSide").style.height = "500px"; 

  for (key in highScores){
    console.log('LLLLL');
    $('#scores').append('<li> ' + (key + ": " + highScores[key]) + '</li>');
  }
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("highScoreSide").style.width = "0";
  $('#scores').empty();
}
//Starter
function starterButton() {
  document.getElementById("mainID").style.visibility = "visible";
  document.getElementById("instructionsCardID").style.visibility = "hidden";
  loadCueCards();
  //Start Time
  document.getElementById('timerBlock').innerHTML =
  02 + ":" + 05;
  startTimer();
}
function areThereQuestiosnLeft() {
  for(var x = 0; x < cueCard.length; x++){
    if(cueCard[x].Answered == 0){
      return true
    }
  }
  return false;
}

function startTimer() {
  var timeBlock = document.getElementById('timerBlock').innerHTML;
  var timeArr = timeBlock.split(/[:]+/);
  var m = timeArr[0];
  var s = checkSecond((timeArr[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    displayScore();
    return
  }
  
  document.getElementById('timerBlock').innerHTML = (m + ":" + s);
  setTimeout(startTimer, 1000);
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec
  }; 
  if (sec < 0) {
    sec = "59"
  };
  return sec;
}


function loadCueCards() {
  var cueObject = cueCard[parseInt(Math.floor(Math.random() * cueCard.length))];
  correctChoice = cueObject.Correct;
  while(cueObject.Answered == -1){
    cueObject = cueCard[parseInt(Math.floor(Math.random() * cueCard.length))];
    correctChoice = cueObject.Correct;
  }
  document.getElementById("question").innerHTML = cueObject.Question;
  //cueCard[x][Choices][0]
  document.getElementById("answer_zero").innerHTML = String(cueObject.Choices[0]);
  document.getElementById("answer_zero").value = String(cueObject.Choices[0]);
  //cueCard[x][Choices][1]
  document.getElementById("answer_one").innerHTML = String(cueObject.Choices[1]);
  document.getElementById("answer_one").value = String(cueObject.Choices[1]);
  //cueCard[x][Choices][2]
  document.getElementById("answer_two").innerHTML = String(cueObject.Choices[2]);
  document.getElementById("answer_two").value = String(cueObject.Choices[2]);
  //cueCard[x][Choices][3]
  document.getElementById("answer_three").innerHTML = String(cueObject.Choices[3]);
  document.getElementById("answer_three").value = String(cueObject.Choices[3]);
  //Set object to be Answered (-1)/ (0) Unanswered
  cueObject.Answered = -1;
}
function displayScore(){
  var rootEl = $('#root');
  var titleEl = $('<h1>');
  var paraEl = $('<p>');

  document.getElementById("mainID").style.visibility = "hidden";
  if (questions == 10){
    titleEl.text("Done! Your Score is: " + (correct / questions) * 100 + "\%");
    paraEl.text("Add your highscrore, New game starts after clicking submit.");
    paraEl.css("margin-left","500px");
    titleEl.css("margin-left","500px");
    
    rootEl.append(titleEl);
    rootEl.append(paraEl);
    //----------------------------------------------------------------
    var highscoreForm = $('<form>');
    var highscoreInput = $('<input>');
    var highscoreInputBtn = $('<button>');

    highscoreInputBtn.html("Submit");

    highscoreForm.append(highscoreInput);
    highscoreForm.append(highscoreInputBtn);
    rootEl.append(highscoreForm);

    highscoreForm.css("margin-left","500px");
    highscoreInputBtn.css("margin-left","10px");
    highscoreInputBtn.css("padding","10px");
    highscoreInputBtn.css("padding-left","20px");
    highscoreInputBtn.css("padding-right","20px");


    
    $(highscoreInputBtn).click(function(){
        $(this).data('clicked', true);
        console.log("Peter");

        var inital = highscoreInput.val();
        var temp_Score = correct / questions * 100;
        highScores[inital] = temp_Score;
        localStorage.setItem("highScores", JSON.stringify(highScores));
        setTimeout(function(){
          window.location.reload();
        },5000);
    });
  }
  else{
    titleEl.text("Times Up! You get a: Incomplete");
    paraEl.text("Try again?");

    rootEl.append(titleEl);
    rootEl.append(paraEl);

    var highscoreForm = $('<form>');
    var highscoreInputBtn = $('<button>');
    highscoreInputBtn.html("Try Again");
    highscoreInputBtn.css("margin-left","15px");
    highscoreInputBtn.css("padding","10px");
    highscoreInputBtn.css("padding-left","20px");
    highscoreInputBtn.css("padding-right","20px");

    highscoreInputBtn.css("background","green");

    highscoreForm.append(highscoreInputBtn);
    rootEl.append(highscoreForm);

    $(highscoreInputBtn).click(function(){
      console.log("Gundam");
      setTimeout(function(){
        window.location.reload();
      });
    });
  }
}
    

function answerPicked(x) {
  if((String(correctChoice).localeCompare(String(x.value))) == 0){
    console.log("White");
    correct++;
    questions++;
    x.style.background = "green";
  }
  else { 
    console.log("Goodman");
    wrong++;
    questions++;
    x.style.background = "red";
  }

  if(!areThereQuestiosnLeft()){
    displayScore();
  }
  else{

    setTimeout(function(){
      x.style.background = "purple";
      loadCueCards();
    },200);
    
  }
}

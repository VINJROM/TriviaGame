// Variables ===========================================================================================================

// Array where our questions will be stored.
var q = [
  "What is the name of Will Smith’s character in Independence Day?<br /><br />",
  "What year was Forrest Gump released?<br /><br />",
  "Which musical star was knighted by Queen Elizabeth II in 1998? <br /><br />",
  "Which 90s TV show features characters with the name Tommy, Zack, Kimberly, Billy, and Trini? <br /><br />",
  "What movie was Robin Williams’ first animated film?<br /><br />"
];

// Array where the first set of options will be stored.
var a1 = [
  "<button class=buttons002 onclick=q1i()>Avery J. Johnson</button>",
  "<button class=buttons002 onclick=q2i()>1991</button>",
  "<button class=buttons002 onclick=q3i()>David Bowie</button>",
  "<button class=buttons002 onclick=q4i()>Rugrats</button>",
  "<button class=buttons002 onclick=q5i()>Aladdin</button>"
];

// Array where the second set of options will be stored.
var a2 = [
  "<button class=buttons002 onclick=q1i()>Captain James Price</button>",
  "<button class=buttons002 onclick=q2i()>1992</button>",
  "<button class=buttons002 onclick=q3i()>Paul David Hewson</button>",
  "<button class=buttons002 onclick=q4c()>The Mighty Morphin Power Rangers </button>",
  "<button class=buttons002 onclick=q5i()>Rabbit Ears</button>"
];

// Array where the third set of options will be stored.
var a3 = [
  "<button class=buttons002 onclick=q1c()>Captain Steve Miller</button>",
  "<button class=buttons002 onclick=q2i()>1993</button>",
  "<button class=buttons002 onclick=q3c()>Elton John</button>",
  "<button class=buttons002 onclick=q4i()>Recess</button>",
  "<button class=buttons002 onclick=q5i()>The Timekeeper</button>"
];

// Array where the fourth set of options will be stored.
var a4 = [
  "<button class=buttons002 onclick=q1i()>Fresh Prince of Bel-Air</button>",
  "<button class=buttons002 onclick=q2c()>1994</button>",
  "<button class=buttons002 onclick=q3i()>Paul McCartney</button>",
  "<button class=buttons002 onclick=q4i()>Barney & Friends</button>",
  "<button class=buttons002 onclick=q5c()>Ferngully: The Last Rainforest</button>"
];

// Array values that will display when correct answer is called.
var c = [
  "Correct. Answer is Captain Steve Miller.",
  "Correct. Answer is 1994.",
  "Correct. Answer is Elton John.",
  "Correct. Answer is Mighty Morphin Power Rangers.",
  "Correct. Answer is Ferngully: The Last Rainforest."
];
// Array values that will display when incorrect answer is called;
var i = [
  "Incorrect. Answer is Captain Steve Miller.",
  "Incorrect. Answer is 1994.",
  "Incorrect. Answer is Elton John.",
  "Incorrect. Answer is Mighty Morphin Power Rangers.",
  "Incorrect. Answer is Ferngully: The Last Rainforest."
];

// Variable that will store question number and score.
var n = 0;
n++;
var s = 0;
s++;

// FUNCTIONS =====================================================================================================

// 50 second timer (10 seconds for each question).

// Records seconds per quiz.
var count = 50;

// Stores intervalId.
var intervalId;

// When first button is clicked, run timer.
$("#begin001").on("click", runTimer);
console.log(count);

// Reduces given time by 1 per second.
function runTimer() {
  intervalId = setInterval(decrement, 1000);
}

// Stops game and goes to end screen when countdown reaches 0.
function decrement() {
  count--;
  $("#timer").html(count);
  if (count === 0) {
    stop();
    end001();
  }
}

// Clears timer count.
function stop() {
  clearInterval(intervalId);
}

// Hides starting text and displays first set of array questions and options.
$("#begin001").click(function() {
  $("#disappear001").hide();
  $("#message001").hide();
  $("#question001").append(q[0]);
  $("#option001").append(a1[0]);
  $("#option002").append(a2[0]);
  $("#option003").append(a3[0]);
  $("#option004").append(a4[0]);
  $("#number001").append(n++);
});

// Correct question 1 response-- Hides text, displays green answer and Next button. Increments score.
function q1c() {
  $("#answer001").append("<div id=green001>" + c[0] + "</div>");
  document.getElementById("../images/steve-miller.gif");
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
  $("#score").load(function() {
    s++;
  });
}

// Incorrect question 1 response-- Hides text, displays red answer and Next button.
function q1i() {
  $("#answer001").append("<div id=red001>" + i[0] + "</div>");
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  $("#next001").append(
    "<button class=buttons001 onclick=new002()>Next</button>"
  );
}

// Displays second array of questions and options. Increments question number.
function new002() {
  question001.innerHTML = q[1];
  option001.innerHTML = a1[1];
  option002.innerHTML = a2[1];
  option003.innerHTML = a3[1];
  option004.innerHTML = a4[1];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

// Correct question 2 response-- Hides text, displays green answer and Next button. Increments score.
function q2c() {
  answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
  score.innerHTML = s++;
}

// Incorrect question 2 response-- Hides text, displays red answer and Next button.
function q2i() {
  answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
}

// Displays third array of questions and options. Increments question number.
function new003() {
  question001.innerHTML = q[2];
  option001.innerHTML = a1[2];
  option002.innerHTML = a2[2];
  option003.innerHTML = a3[2];
  option004.innerHTML = a4[2];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

// Correct question 3 response-- Hides text, displays green answer and Next button. Increments score.
function q3c() {
  answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
  score.innerHTML = s++;
}

// Incorrect question 3 response-- Hides text, displays red answer and Next button.
function q3i() {
  answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
}

// Displays fourth array of questions and options. Increments question number.
function new004() {
  question001.innerHTML = q[3];
  option001.innerHTML = a1[3];
  option002.innerHTML = a2[3];
  option003.innerHTML = a3[3];
  option004.innerHTML = a4[3];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

// Correct question 4 response-- Hides text, displays green answer and Next button. Increments score.
function q4c() {
  answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
  score.innerHTML = s++;
}

// Incorrect question 4 response-- Hides text, displays red answer and Next button.
function q4i() {
  answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
}

// Displays fifth array of questions and options. Increments question number.
function new005() {
  question001.innerHTML = q[4];
  option001.innerHTML = a1[4];
  option002.innerHTML = a2[4];
  option003.innerHTML = a3[4];
  option004.innerHTML = a4[4];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

// Correct question 5 response-- Hides text, displays green answer and End of Quiz button. Increments score.
function q5c() {
  answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML =
    "<button class=buttons001 onclick=end001()>End of Quiz</button>";
  score.innerHTML = s++;
}

// Incorrect question 5 response-- Hides text, displays red answer and Next button.
function q5i() {
  answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML =
    "<button class=buttons001 onclick=end001()>End of Quiz</button>";
}

// Hides text-- Displays End of Quiz and Repeat button.
function end001() {
  // disappear002
  stop();
  $("#endScore").append("End of Quiz. " + "Your score is " + s + " out of 5.");
  question001.innerHTML = "";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML =
    "<div id=topButton>" +
    "<button class=buttons001 onclick=repeat001()>Repeat</button>" +
    "</div>";
  answer001.innerHTML = "";
}

// Reloads game.
function repeat001() {
  location.reload();
}

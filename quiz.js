var timerEl = document.getElementById("timer");
var mainEl = document.getElementById('question');
var startBtn = document.getElementById('start');
alert("Welcome! FYI, wrong answers deduct 10 seconds from time!")

var message =
  'Congratulations! Now you are prepared to tackle the Challenge this week! Good luck!';
var words = message.split(' ');

// Timer
function start() {
  var timeLeft = 300; //this is the timer time parameter

  var timeInterval = setInterval(function() {
      var min= Math.floor(timeLeft/60); //defines the minutes
      var sec= timeLeft%60;  //defines the seconds
      if (sec<10) sec='0'+sec  //if sec <10 will display 09 instead of just 9
      timerEl.textContent = min + ':' + sec +' remaining';
      if (timeLeft ===10) {
          timerEl.textContent = timeLeft + ' seconds remaining!'
      }else if (timeLeft <1) {
          timerEl.textContent = ' ';
          clearInterval(timeInterval);
          displayMessage();
      }
      timeLeft -- //displays the time continuously
      }, 1000);  //this function read every 1 sec.
    //

function startQuiz() {
    alert("first question")
    console.log("debug");

}







    // YOUR CODE HERE
    //
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

startBtn.onclick = start; //This is the onclick command

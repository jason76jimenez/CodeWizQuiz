var timerEl = document.getElementById("timer");
var mainEl = document.getElementById('qQ');
var startBtn = document.getElementById('start');
//var btnD = document.getElementsByClassName("btnD");
var hide= document.getElementById("hide");
var answer= document.getElementById("answer");
var box= document.getElementById("box");

//some style commands
answer.style.display = ("none");

//message when times up
var message =
  "Times up!";

// Timer start function
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

    // start btn and notification disappear on start boxes appear
        if (start){
            hide.style.display = "none";
            startBtn.style.display = "none";
            box.style.display = "block";
        }
    // questions start
    var btnD = document.getElementsByClassName("btnD");
            mainEl.textContent= "Commonly used data types DO NOT include:"
            btnD.textContent="booleans"
            console.log("working");
                
        
    






  }


//no curly brackets below here!!!





    // YOUR CODE HERE
    //


// Displays the message one word at a time
function displayMessage() {
  var wordCount = 2;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

startBtn.onclick = start; //This is the onclick command
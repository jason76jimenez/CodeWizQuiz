var timerEl = document.getElementById('start');
var mainEl = document.getElementById('question');
var startBtn = document.getElementById('start');

var message =
  'Congratulations! Now you are prepared to tackle the Challenge this week! Good luck!';
var words = message.split(' ');

// Timer that counts down from 5
function start() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + 'seconds remaining!';
      if (timeLeft ===1) {
          timerEl.textContent = timeLeft + 'seconds remaining!'
      }else if (timeLeft <1) {
          timerEl.textContent = ' ';
          clearInterval(timeInterval);
          displayMessage();
      }
      timeLeft --
      }, 1000);
    //
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
  }, 300);
}

startBtn.onclick = countdown;

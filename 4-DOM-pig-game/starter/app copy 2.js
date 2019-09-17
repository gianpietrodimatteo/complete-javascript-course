/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying;

init();

// test in global first
// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// the string that folows textContent is displayed
// document.querySelector("#current-" + activePlayer).textContent = dice;
// the string that follows innerHTML is the html
// document.querySelector("#current-" + activePlayer).innerHTML =
//   "<em>" + dice + "</em>";

// works also for reading
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

// the display of the css is set to none "display: none;"
// document.querySelector(".dice").style.display = "none";

/*
// you can set the function then pass the reference
function btn() {
  // do something
}
// set the type, the function (without parenthesis, it's just the reference)
document.querySelector(".btn-roll").addEventListener("click", btn);
*/

// getElementById is faster than querySelector!
// just put the id, not as in the selector
// document.getElementById("score-0").textContent = "0";
// document.getElementById("score-1").textContent = "0";
// document.getElementById("current-0").textContent = "0";
// document.getElementById("current-1").textContent = "0";

// anonymous function is when you declare the function directly
// note that you won't be able to re-use it elsewhere afterwards
document.querySelector(".btn-roll").addEventListener("click", function() {
  if(gamePlaying){

    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display result
    // store in object, thats an expensive operation
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    
    // 3. Update the round score IF the rolled number was NOT 1
    if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      // Next player
      activePlayer = activePlayer === 0 ? 1 : 0;
      // Reset scores and display
      roundScore = 0;
      document.getElementById("current-0").textContent = "0";
      document.getElementById("current-1").textContent = "0";
      // Change the current player indication
      // First try out and see the add and remove from the class list
      // document.querySelector('.player-0-panel').classList.remove('active');
      // document.querySelector('.player-1-panel').classList.add('active');
      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector(".player-1-panel").classList.toggle("active");
      // remove dice again
      document.querySelector(".dice").style.display = "none";
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  // Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  // Update the UI
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Check if player won the game
  if (scores[activePlayer] >= 10) {
    document.getElementById("name-" + activePlayer).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Next player!
    nextPlayer();
  }
});
// Its best practice to have your css classes made
// In javascript you just add remove or toggle the ready made classes

function nextPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  // Reset the scores as in the begining
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  gamePlaying=true;

  // remove the dice
  document.querySelector(".dice").style.display = "none";
  // reset the scores display
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  // Reset names!
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  // Remove can be called even if the class was not called
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  // You need to remove anyways because the active class could be added twice
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
}

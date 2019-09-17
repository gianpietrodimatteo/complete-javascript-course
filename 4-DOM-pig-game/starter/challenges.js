/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores,
  roundScore,
  activePlayer,
  dice,
  previousDice,
  gamePlaying,
  winningScore;

init();
// Didnt do the 2 dices thing, he does the two dice as one
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    // 1. Random number
    dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // 3. Update the round score IF the rolled number was NOT 1
    if (dice !== 1) {
      // Note que nao se pdoe fazer (dice === previousDice) === 6, pois se está comparando true/false com 6
      if (dice === 6 && previousDice === 6) {
        // Reset scores
        scores[activePlayer] = 0;
        // Update the DOM
        document.getElementById("score-" + activePlayer).textContent =
          scores[activePlayer];
        nextPlayer();
      } else {
        // Add score
        roundScore += dice;
        document.querySelector(
          "#current-" + activePlayer
        ).textContent = roundScore;
      }
    } else {
      nextPlayer();
    }
    previousDice = dice;
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      // Not playing the game anymore, there is a winner
      gamePlaying = false;
    } else {
      // Next player!
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore = 0;
  previousDice = 0;
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

  previousDice = 0;

  var input = document.querySelector(".winning-score").value;
  
  if (input) {
    winningScore = input;
  } else {
    winningScore = 100;
  }

  gamePlaying = true;

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

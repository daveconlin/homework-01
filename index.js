var weapons = ["Rock", "Paper", "Scissors"];
var players = ["Aaron", "Betty"];
var winningNumber = 3;
var turnA, turnB;
var scoreA = 0;
var scoreB = 0;
var roundWinner = null;
var gameWinner = null;

var weaponOfChoice = function() {
  return weapons[parseInt(Math.random() * weapons.length) % 3];
};

var fight = function(turnA, turnB) {
  // Rock
  if (turnA == weapons[0]) {
    if (turnB == weapons[1]) {
      return turnB;
    }
    if (turnB == weapons[2]) {
      return turnA;
    }
  }

  // Paper
  if (turnA == weapons[1]) {
    if (turnB == weapons[0]) {
      return turnA;
    }
    if (turnB == weapons[2]) {
      return turnB;
    }
  }

  // Scissors
  if (turnA == weapons[2]) {
    if (turnB == weapons[0]) {
      return turnB;
    }
    if (turnB == weapons[1]) {
      return turnA;
    }
  }

  return null;
};

while (scoreA < winningNumber && scoreB < winningNumber) {
  turnA = weaponOfChoice();
  turnB = weaponOfChoice();
  var winner = fight(turnA, turnB);


  if (winner == turnA) {
    scoreA++;
    roundWinner = players[0];
  } else if (winner == turnB) {
    roundWinner = players[1];
    scoreB++;
  } else {
    roundWinner = null;
  }

  console.log(players[0] + "(" + scoreA + ")" + ": " + turnA);
  console.log(players[1] + "(" + scoreB + ")" + ": " + turnB);

  if (winner === null ){
    console.log("It's a tie!\n");
  }else{
    console.log(roundWinner + " (" + winner + ") wins the round\n");
  }

}

if(scoreA>=winningNumber){
  gameWinner = players[0];
} else if (scoreB>=winningNumber) {
  gameWinner = players[1];
}

console.log(gameWinner.toUpperCase()+" IS THE WINNER OF THE GAME!");

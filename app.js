// Object leterals

// let car = {  // egenskap. ett objekt som har egenskaper
// wheels: 4,
// doors: 4,
// Window: 6,
// color: "maroon",
// name: "postnord"
// }

// console.log(car)

let playerOne = {
    name: "Sandra",
    score: 0
}

let playerTwo = {
    name: "Jakob",
    score: 0
}

let players = [playerOne, playerTwo];
let gameTurn = 0;
let hiddenNumber = 0;

const playerTurnLbl = document.querySelector(".player-turn-lbl");
const playerGuessField = document.querySelector(".player-guess-field");
const playerGuessBtn = document.querySelector(".player-guess-btn");
const playerGuessMsg = document.querySelector(".player-guess-msg");
const playerOneScorePara = document.querySelector(".player.one-score");
const playerTwoScorePara = document.querySelector(".player-two-score");

function updateDisplays() {
    let currentPlayer = players[gameTurn];
    playerTurnLbl.innerText = currentPlayer.name;
    playerOneScorePara.innerText = `${players[0].name}: ${players[0].score}`
    playerTwoScorePara.innerText = `${players[1].name}: ${players[1].score}`
}

function handleGuess() {
    let guessValue = playerGuessField.value; //input använder value istället för ...

 if(guessValue == hiddenNumber) {
    let currentPlayer = players[gameturn];
    currentPlayer.score = currentPlayer.score + 1;
    playerGuessMsg.innerText ="Guess was correct!"
    startGame();
   // console.log("Corrent value") 
 }  else if (guessValue > hiddenNumber) {
    playerGuessMsg.innerText ="Guess was too high!"
    
 } else {
    playerGuessMsg.innerText ="Guess was too low!"
 }
 gameTurn = (gameTurn + 1) % 2; //alternera spelare

 updateDisplays();
}


playerGuessBtn.addEventListener("click", handleGuess);

function startGame() {
    gameTurn = 0;
    hiddenNumber = Math.random() * 10 + 1;

    let currentPlayer = players[gameTurn];
    // console.log(players);
    // console.log(currentPlayer);
    playerTurnLbl.innerText = currentPlayer.name;
}

startGame();
//console.log(players);
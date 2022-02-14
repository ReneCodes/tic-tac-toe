/* |----------------------------------|*/
/* |  Includes variables and events   |*/
/* |----------------------------------|*/

const gameData = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];

let editedPlayerId = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const configOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startGameBtnElement = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById("game-board");
const activePlayerNameElement = document.getElementById("active-player-name");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startGameBtnElement.addEventListener("click", startNewGame);

// for (const gameFieldBlock of gameFieldElements){
//   gameFieldBlock.addEventListener('click', slectGameField);
// }

gameBoardElement.addEventListener("click", slectGameField);

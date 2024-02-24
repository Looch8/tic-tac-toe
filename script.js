// IIFE Module for gameboard
const gameboard = (function () {
	const rows = 3;
	const columns = 3;
	const board = ["", "", "", "", "", "", "", "", ""];

	// render the board when start is clicked

	const render = () => {
		let boardHTML = "";
		gameboard.forEach((square, index) => {
			boardHTML += `<div class="square" id=square-${index}">${square}</div>`;
		});
	};
	document.querySelector(".gameboard").innerHTML = boardHTML;
	return {
		render,
	};
})();

// Factorie function (Create player objects)
function createPlayer(player) {
	return {
		player: player,
	};
}

let playerOne = createPlayer("player one");
let playerTwo = createPlayer("player Two");

console.log(playerOne, playerTwo);

// Control flow of game
const Game = () => {

	let players = [];
	let currentPlayerIndex
	let gameOver

	const start = () => {
		players = [createPlayer(document.querySelector("#player1").value, 'O'), createPlayer(document.querySelector("#player2").value, 'X')]
		currentPlayerIndex = 0;
		gameOver = false;
		gameboard.render();
	}
	return {
		start,
	}
}();

// Module
// Display Controller

// Start game
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
	//Game.start();
});

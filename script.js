// IIFE Module for gameboard
const Gameboard = (function () {
	const rows = 3;
	const columns = 3;
	const board = [];

	// Create 2-d array
	for (let i = 0; i < rows; i++) {
		board[i] = [];
		for (let j = 0; j < columns; j++) {
			board[i].push(Cell());
		}
	}
	return board;
})();

// Cell represents one square on the board
function Cell() {
	let value = 0;
	return {
		value,
	};
}

console.log(Gameboard);

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
const Game = {};

// Module
// Display Controller

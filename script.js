// IIFE Module for gameboard
const Gameboard = (function () {
	const board = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	];
	// Return an object with methods to interact with the board

	return {
		getBoard: function () {
			return board;
		},
	};
})();

// board array
const gameboardArray = Gameboard.getBoard();

// TODO - turn this into a function where I can just select spot on the board (potentially)
// Changing elements in 2d array
gameboardArray[1][0] = "o";
gameboardArray[2][0] = "x";
console.log(gameboardArray);

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

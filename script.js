// IIFE Module for gameboard
const Gameboard = (function () {
	const board = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	];
	// Return an object with methods to interact with the board

	// HELPFUL COMMENT - This way Gameboard contains an object, that at the moment is only {board}, but later on if you need any methods or anything else, you can put them in there alongside the board
	return {
		board,
	};
})();

// board array
const gameboardArray = Gameboard.board;

// TODO - turn this into a function where I can just select spot on the 2d array
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

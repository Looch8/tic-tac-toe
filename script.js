// IIFE Module for gameboard
const Gameboard = (function () {
	// Might convert this to a 1d array - still deciding
	const board = [
		["b", "q", "l"],
		["n", "o", "t"],
		["m", "a", "k"],
	];
	// Return an object with methods to interact with the board

	// HELPFUL COMMENT - This way Gameboard contains an object, that at the moment is only {board}, but later on if you need any methods or anything else, you can put them in there alongside the board
	return {
		board,
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
const Game = function () {
	// board array
	const gameboardArray = Gameboard.board;

	// convert 2d array to 1d array
	const convertedArray = [].concat(...Gameboard.board);

	// Tic Tac Toe winning conditions
	const winningConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	return {
		gameboardArray,
		convertedArray,
		winningConditions,
	};
};
const game = Game(); // Call the function to get the returned object. Have to stored the Game object in a variable if I want to use it.

// This works
const test = game.convertedArray;
console.log(test);

// Module
// Display Controller

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

// For example, the first winning condition would be `[[0,0], [0,1], [0,2]]`. I'm an array for each element access.
const winCondition = [
	Gameboard.board[0][0],
	Gameboard.board[0][1],
	Gameboard.board[0][2],
];

console.log(winCondition);

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

	// Another way for win conditions
	// [[0,0], [0,1], [0,2]].every(([subArrayIndex, itemIndex]) => {
	// 	Board[subArrayIndex][itemIndex]
	// 	})

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

// This works
const test = Game().convertedArray;
console.log(test);

// Module
// Display Controller

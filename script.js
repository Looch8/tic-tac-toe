// IIFE Module for gameboard
const Gameboard = (function () {
	const gameboard = [
		["x", "x", "x"],
		["x", "x", "x"],
		["x", "x", "x"],
	];
	return gameboard;
})();
console.log(Gameboard);

// Factorie function (Create player objects)
function Player(playerName) {
	return {
		playerName: playerName,
	};
}

let playerOne = Player("player one");
let playerTwo = Player("player Two");

console.log(playerOne, playerTwo);

// Control flow of game
const Game = {};

// Module
// Display Controller

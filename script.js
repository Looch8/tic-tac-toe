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

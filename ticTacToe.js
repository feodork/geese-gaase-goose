// game elements
const squares = document.querySelectorAll(".square")
const winner = document.querySelector(".level-winner")
const gameboard = document.querySelector(".gameboard")
const button = document.querySelector(".btn")
const displayTurn = document.querySelector(".player-turn")
const player1ScoreCounter = document.querySelector("#player-one")
const player2ScoreCounter = document.querySelector("#player-two")
const goose = document.querySelector(".gif")

// game variables
const player1 = "X"
const player2 = "O"
let player1Score = 0
let player2Score = 0
let gameFinished = false
let playerTurn = player1
let displayFirstPlayer = displayTurn.innerText = `It's ${playerTurn}'s turn`

// swap between player 1 & 2
const changePlayer = () => {
	if (playerTurn === player1) {
		playerTurn = player2
	} else {
		playerTurn = player1
	}
	displayTurn.innerText = `It's ${playerTurn}'s turn`
}

// this function is ver large and should be broken up into smaller/single use functions
const handleClick = (tile) => {
	// on click of tile, ensures that tile is empty
	if(tile.innerText != "") {
		return
	}
	// on click of tile ensures that game is not over
	if(gameFinished) {
		return
	}
	// prints player's token on selected tile
	tile.innerText = playerTurn
	// checks for winning combinations
	const updatedBoard = document.querySelectorAll(".square")
	if (updatedBoard[0].innerText === updatedBoard[1].innerText && updatedBoard[0].innerText === updatedBoard[2].innerText && updatedBoard[0].innerText != ""||
		updatedBoard[3].innerText === updatedBoard[4].innerText && updatedBoard[3].innerText === updatedBoard[5].innerText && updatedBoard[3].innerText != ""||
		updatedBoard[6].innerText === updatedBoard[7].innerText && updatedBoard[6].innerText === updatedBoard[8].innerText && updatedBoard[6].innerText != ""||
		updatedBoard[0].innerText === updatedBoard[3].innerText && updatedBoard[0].innerText === updatedBoard[6].innerText && updatedBoard[0].innerText != ""||
		updatedBoard[1].innerText === updatedBoard[4].innerText && updatedBoard[1].innerText === updatedBoard[7].innerText && updatedBoard[1].innerText != ""||
		updatedBoard[2].innerText === updatedBoard[5].innerText && updatedBoard[2].innerText === updatedBoard[8].innerText && updatedBoard[2].innerText != ""||
		updatedBoard[0].innerText === updatedBoard[4].innerText && updatedBoard[0].innerText === updatedBoard[8].innerText && updatedBoard[0].innerText != ""||
		updatedBoard[2].innerText === updatedBoard[4].innerText && updatedBoard[2].innerText === updatedBoard[6].innerText && updatedBoard[2].innerText != ""
		) {
			// on completion of game
			gameFinished = true
			displayTurn.innerText = ""
			winner.innerText = `Congratulations! ${playerTurn} wins`
			updateScoreBoard()
	// need to include draw message
	} else {
		changePlayer()
	}	
}

const updateScoreBoard = () => {
	if (playerTurn === player1) {
		player1Score++
	} else if (playerTurn === player2){
		player2Score++
	}
	player1ScoreCounter.innerHTML = player1Score;
    player2ScoreCounter.innerHTML = player2Score;
}

// each time a square is clicked, use loop to work through the array made by the querySelectorAll
for (let i = 0; i < squares.length; i++) {
squares[i].addEventListener("click", () => {handleClick(squares[i])})
}

// go through the array and update with empty strings to clear the board
const clearBoard = () => {
	for (let i = 0; i < squares.length; i++) {
		// sound effects
		playHonk()
		// replacing each of the strings in the array with a blank string
		squares[i].innerText = ""
		}
		winner.innerText = ""
		gameFinished = false
}

// button resets game
button.addEventListener("click", clearBoard)

const playHonk = ()=> {
    const audio = new Audio("audio/honk-sound.mp3");
    audio.play();
}

// animate gif to waddle across screen and then disappear
let start = Date.now()

let timer = setInterval(function() {
  let timePassed = Date.now() - start;

  if (timePassed >= 15000) {
    clearInterval(timer)
    return;
  }

  draw(timePassed);

}, 20);

const draw = (timePassed) => {
  gif.style.left = timePassed / 5 + 'px';
}


// unused code
// hoping to improve and use this array in the future
// const winningCombinations = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6]
// ]


















const moves=['rock', 'paper', 'scissors']

function computerPlay(){
	let pcMove = moves[Math.floor(Math.random() * moves.length)] // Randomly picks an item from the moves list
	return pcMove
}

function roundPlay(playerSelection, computerSelection){
	playerSelection = playerSelection.toLowerCase()	
	winningMessage = 'You win! ' + playerSelection + ' beats ' + computerSelection + "."
	losingMessage = 'You lose! ' + computerSelection + ' beats ' + playerSelection + "."
	drawMessage = 'It is a draw'


	if(playerSelection === computerSelection){
		return drawMessage // Draw match
	} else if(playerSelection === 'rock'){
		if(computerSelection === 'scissors'){
			return winningMessage // Player wins
		} else{
			return losingMessage // Computer wins
		}
	} else if(playerSelection === 'scissors'){
		if(computerSelection === 'paper'){
			return winningMessage // Player wins
		} else{
			return losingMessage // Computer wins
		}
	} else if(playerSelection === 'paper'){
		if(computerSelection === 'rock'){
			return winningMessage // Players wins
		} else{
			return losingMessage // Computer wins
		}
	} else {
		return "Somethin went wrong..."
	}
}

const buttons = document.querySelectorAll('button') // Selecte all buttons
let playerWin = 0
let computerWin = 0
let drawCount = 0


buttons.forEach((button) => {
	button.addEventListener('click', () => {
		playerSelection = button.id
		computerSelection = computerPlay()
		round = roundPlay(playerSelection, computerSelection)
		if (round === winningMessage) {
			playerWin += 1;
		} else if(round === losingMessage) {
			computerWin += 1;
		} else {
			drawCount += 1
		}

		console.log(round)
		const container = document.querySelector('#container') // Selects the div with container id
		const div = document.createElement('div') // Creates a div element 

		div.textContent = round + " Player score: " + playerWin + " Computer score: " + computerWin // adds text to the div element
		container.appendChild(div) // Adds the div element as a child to the container

		if(playerWin === 5){
			container.innerHTML = "<h1>Player Won!</h1>"
			playerWin = 0
			computerWin = 0
			drawCount = 0		
		} else if(computerWin === 5){
			container.innerHTML = "<h1>Computer Won!</h1>"
			playerWin = 0
			computerWin = 0
			drawCount = 0
		}
	});
});


const moves=['rock', 'paper', 'scissors']

function computerPlay(){
	let pcMove = moves[Math.floor(Math.random() * moves.length)]
	return pcMove
}



function roundPlay(playerSelection, computerSelection){
	playerSelection = playerSelection.toLowerCase()	
	winningMessage = 'You win! ' + playerSelection + ' beats ' + computerSelection
	losingMessage = 'You lose! ' + computerSelection + ' beats ' + playerSelection
	drawMessage = 'It is a draw'


	if(playerSelection === computerSelection){
		return drawMessage
	} else if(playerSelection === 'rock'){
		if(computerSelection === 'scissors'){
			return winningMessage
		} else{
			return losingMessage
		}
	} else if(playerSelection === 'scissors'){
		if(computerSelection === 'paper'){
			return winningMessage
		} else{
			return losingMessage
		}
	} else if(playerSelection === 'paper'){
		if(computerSelection === 'rock'){
			return winningMessage
		} else{
			return losingMessage
		}
	} else {
		return "Somethin went wrong..."
	}
}

function game(){
	let playerWin = 0
	let computerWin = 0
	let drawCount = 0
	for(i = 1; i <= 5; i++){
		const playerSelection = prompt("Play your move:")
		const computerSelection = computerPlay()
		round = roundPlay(playerSelection, computerSelection)
		console.log(round)
		if (round === winningMessage) {
			playerWin += 1;
		} else if(round === losingMessage) {
			computerWin += 1;
		} else {
			drawCount += 1
		}
	}
	if (playerWin > computerWin){
		return "Player won!"
	} else if(playerWin < computerWin){
		return "Computer won!"
	} else{
		return "Nobody won"
	}
}

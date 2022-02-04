const moves=['rock', 'paper', 'scissors']

function computerPlay(){
	let pcMove = moves[Math.floor(Math.random() * moves.length)]
	return pcMove
}



function roundPlay(playerSelection, computerSelection){
	playerSelection = playerSelection.toLowerCase()	
	winningMessage = 'You win! ' + playerSelection + ' beats ' + computerSelection
	losingMessage = 'You lose! ' + computerSelection + ' beats ' + playerSelection


	if(playerSelection === computerSelection){
		return 'It is a draw'
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
	for(i = 1; i <= 5; i++){
		const playerSelection = prompt("Play your move:")
		const computerSelection = computerPlay()
		console.log(roundPlay(playerSelection, computerSelection))
	}
}

const moves = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let moveSelection = moves[Math.floor(Math.random() * moves.length)];
    console.log(moveSelection);
    return moveSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'It\'s a tie! Try again.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats rock.';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats paper';
    } else {
        return 'Please reload the page and try again.';
    }
}

const computerSelection = computerPlay();
let playerSelection = prompt("Beat the machine:").toLowerCase();
console.log(playRound(playerSelection, computerSelection));



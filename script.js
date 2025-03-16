let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//This function returns a random integer between 0 and 9
function generateTarget() {
    return Math.floor(Math.random() * 10);
}


//console.log(generateTarget());


//Determine's which guess is closest to the target number
function compareGuesses(user, computer, target) {
    user = Math.abs(target - user);
    computer = Math.abs(target - computer);
    
    if(user === computer) {
        return true;
    } else if(user < computer) {
        return true;
    } else {
        return false;
    }
}

//increase's the winner's score after each round.
function updateScore(winner) {

    if(winner === 'human') {
        humanScore++;
    } else if( winner === 'computer') {
        computerScore++;
    }
}


//This function updates the current round
function advanceRound() {
    currentRoundNumber++;
}


//Authour: Shohislombek Solijonov


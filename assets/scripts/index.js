let score = {
    wins: 0,
    losses: 0,
    ties: 0,
}

function game() {
    // you make a choice
    let userInput = prompt("rock, paper or scissors"); // user input
    let user = user.toLowerCase();
    // what if the user inputs anything else that you don't expect
    if (user === 'rock' || user === 'paper' || user === 'scissors') {
        console.log(user);
    } else {
        console.log('Error, please type: rock, paper, or scissors.');
    }
    // calling on computerChoice function
    let computer = computerChoice();

    alert("Computer picked: " + computer);
}



// computer makes a choice
function computerChoice() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
// compare the choices
function getResult(userInput, computer) {
    // scenarios for different coices by user & computer
    if (userInput === computer) {
        score.ties + 1;
        return "It's a tie";
    } else if ((user === 'rock' && computer === 'scissors') || (user === 'paper' && computer === 'rock') || (user === 'scissors' && computer === 'paper')) {
        score.wins + 1;
        return "You Win";
    } else {
        score.losses + 1;
        return "You lost";
    }
}


// ask the user if they wanna play again
// play again if yes
// exit the app if no
// show final results
confirm("you wanna play rps"); // yes or no
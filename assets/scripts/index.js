let score = {
    wins: 0,
    losses: 0,
    ties: 0,
}

function game() {
    // you make a choice
    let user = prompt("rock, paper, or scissors").toLowerCase(); // user input
    // what if the user inputs anything else that you don't expect
    while (user !== 'rock' && user !== 'paper' && user !== 'scissors') {
        alert('Error input was not rock, paper, or scissors');
        game();
    }
    // calling on computerChoice function
    let computer = computerChoice();

    // shows the computers pick
    alert("Computer picked: " + computer);

    // calling on the getResult function
    let result = getResult(user, computer);

    // shows result of game
    alert(result);

    // shows score standings
    alert('Score Standings - Wins: ' + score.wins + " - Losses: " + score.losses + " - Ties: " + score.ties);

    // ask if want to play again
    let play = confirm("Would you like to play again?");
    
    if (play) {
        game(); // recall the game function playing again
    } else {
        alert('Thanks for playing. Here are the finale results. Finale Score - Wins: ' + score.wins + " - Losses: " + score.losses + " - Ties: " + score.ties); // show final results // exit the app if no
    }
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
function getResult(user, computer) {
    // scenarios for different coices by user & computer
    if (user === computer) {
        score.ties++;
        return "It's a tie";
    } else if ((user === 'rock' && computer === 'scissors') || (user === 'paper' && computer === 'rock') || (user === 'scissors' && computer === 'paper')) {
        score.wins++;
        return "You Win";
    } else {
        score.losses++;
        return "You lost";
    }
}


// initial start of game
game();
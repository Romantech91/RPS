let score = {
    wins: 0,
    losses: 0,
    ties: 0,
}
// console.log("hit");
// computer makes a choice
confirm("you wanna play rps"); // yes or no
let user = prompt("rock, paper or scissors"); // user input
let userInput = user.toLowerCase();
// what if the user inputs anything else that you don't expect
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    console.log(userInput);
} else {
    console.log('Error, please type: rock, paper, or scissors.');
}
// alert("hi"); //
// you make a choice
// compare the choices
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

console.log(computerChoice());
// scenarios for different coices by user & computer
// if computer wins, mark it as a win for it
// ask the user if they wanna play again
// play again if yes
// exit the app if no
// show final results

// console.log("hit");
// computer makes a choice
confirm("you wanna play rps"); // yes or no
prompt("rock, paper or scissors"); // user input
// what if the user inputs anything else that you don't expect
// alert("hi"); //
// you make a choice
// compare the choices
const computerChoice = () => {
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

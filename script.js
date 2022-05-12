alert
    ("Choose the Mouse, Lion, or Elephant by pressing a button to start the game.")

//computer choice
let computer = Math.floor(Math.random() * 3);

//Computer's converstion
if (computer <= 1) {
    computer = "elephant";
} else if (computer <= 2) {
    computer = "mouse";
} else {
    computer = "lion";
}

function chooseWinner(value) {

    let user = document.getElementById('submitButton').innerText
    console.log(value);

    //logic
    if (value === computer) {
        alert(`Its a Tie!! The computer chose ${computer} too!`)
    } else if (value == "elephant" && computer == "lion") {
        alert(`You chose ${value} The computer chose ${computer}. You Win!!! Lion fears the Elephant `)
    } else if (value == "mouse" && computer == "elephant") {
        alert(`You chose ${value} The computer chose ${computer}. You Win!!! Elephant fears the Mouse`)
    } else if (value == "lion" && computer == "mouse") {
        alert(`You chose ${value} The computer chose ${computer}. You Win!!! The Mouse fears the Lion`)

    } else {
        alert(`The computer chose ${computer} The computer Wins!!! You chose ${value}. The ${value} fears ${computer}`)
    }

}
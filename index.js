
    let ties = 0;
    let wins = 0;
    let losses = 0;
    
    // randInt returns a random integer between 0 and 2
    function randInt() {
        return Math.floor(Math.random()*3);}
       
    
     function msgAlert(msg, player, comp) {
    const outcome = ["Rock", "Paper", "Scissors"];
    
    if (msg === "tie") {
       alert("Tie!\n" + "Player: " + outcome[player] + "\n" + "Computer: " + outcome[comp]);
    }
    
    if (msg === "win") {
       alert("You won!\n" + "Player: " + outcome[player] + "\n" + "Computer: " + outcome[comp]);
    }
    
    if (msg === "lose") {
       alert("You lost!\n" + "Player: " + outcome[player] + "\n" + "Computer: " + outcome[comp]);
    }
    }
    
    function updateScore(result) {
    let tie = document.getElementById("tie");
    let lose = document.getElementById("lose");
    
    if (result === "tie") {
       ties++;
       tie.innerHTML = ties;
    }
    
    if (result === "win") {
       wins++;
       win.innerHTML = wins;
    }
    
    if (result === "lose") {
       losses++;
       lose.innerHTML = losses;
    }
    }
    
    function hand(player) {
    let comp = randInt();
    
    if (player === comp) {
       updateScore("tie");
       msgAlert("tie", player, comp);
    }
    
    /* Rock Conditions */
    if (player === 0 && comp === 1) {
       updateScore("lose");
       msgAlert("lose", player, comp);
    }
    
    if (player === 0 && comp === 2) {
       updateScore("win");
       msgAlert("win", player, comp);
    }
    
    /* Paper Conditions */
    if (player === 1 && comp === 0) {
       updateScore("win");
       msgAlert("win", player, comp);
    }
    
    if (player === 1 && comp === 2) {
       updateScore("lose");
       msgAlert("lose", player, comp);
    }
    
    /* Scissors Conditions */
    if (player === 2 && comp === 0) {
       updateScore("lose");
       msgAlert("lose", player, comp);
    }
    
    if (player === 2 && comp === 1) {
       updateScore("win");
       msgAlert("win", player, comp);
    }
    }
    
    // //    


// // }
// let userChoice = document.getElementById("text_input");
// let computerChoice = Math.random();

// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if (computerChoice <= 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors"
// }

// const destination = document.getElementById("textInput ").innerHTML;
// const newP = document.createElement("p");
// newP.appendChild(document.createTextNode(userChoice));
// destination.appendChild(newP);

// // document.write("<p>Computer:" + " " + computerChoice + "</p>");


// let compare = function (choice1, choice2) {
//     if (choice1 === choice2) {
//         return "It's a tie";
//     }
//     if (choice2 === "scissors") {
//         return "You win";
//     } else {
//         return "You lose. Try again";
//     }
//     if (choice1 === "paper") {
//         if (choice2 === "rock") {
//             return "You win";
//         } else {
//             return "You lose. Try Again.";
//         }
//     }
//     if (choice1 === "scissors") {
//         if (choice2 === "rock") {
//             return "You lose! Try again.";
//         } else {
//             return "You win";
//         }
//     }
// }
// let result = compare(userChoice, computerChoice)
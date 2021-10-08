// List out constants for each box
const box1 = document.getElementById("box_1");
const box2 = document.getElementById("box_2");
const box3 = document.getElementById("box_3");
const box4 = document.getElementById("box_4");
const box5 = document.getElementById("box_5");
const box6 = document.getElementById("box_6");
const box7 = document.getElementById("box_7");
const box8 = document.getElementById("box_8");
const box9 = document.getElementById("box_9");
// Add players
let player_1_turn = true;
let player_2_turn = false;
document.getElementById("turn").innerHTML = "Player 1 Turn";
// Initialize Counter
let counter = 1;

// console.log(document.getElementById("box_1"));
// console.log(box2);


// Function Definitions
function displayShape(event) {
    if (player_1_turn) {
        // Display 'X' in chosen box
        var x = document.createTextNode("X");
        event.target.appendChild(x);
        // Change Turns
        player_1_turn = false;
        player_2_turn = true;
        // console.log("Player 1 Turn: " + player_1_turn);
        // console.log("Player 2 Turn: " + player_2_turn);
        if (counter == 9) {
            document.getElementById("turn").innerHTML = "Tie Game!"
            //console.log("Tie Game!")
        } else {
            ++counter;
            document.getElementById("turn").innerHTML = "Player 2 Turn";
        }
        //console.log(counter);
    } else {
        // Display 'O' in chosen box
        var o = document.createTextNode("O");
        event.target.appendChild(o);
        // Change Turns
        player_1_turn = true;
        player_2_turn = false;
        // console.log("Player 1 Turn: " + player_1_turn);
        // console.log("Player 2 Turn: " + player_2_turn);
        if (counter == 9) {
            document.getElementById("turn").innerHTML = "Tie Game!"
            //console.log("Tie Game!")
        } else {
            ++counter;
            document.getElementById("turn").innerHTML = "Player 1 Turn";
        }
        //console.log(counter);
    }
}

// Set touchend events
function checkSpace() {
    if (counter <= 9) {
        box1.addEventListener("click", displayShape);
        box2.addEventListener("click", displayShape);
        box3.addEventListener("click", displayShape);
        box4.addEventListener("click", displayShape);
        box5.addEventListener("click", displayShape);
        box6.addEventListener("click", displayShape);
        box7.addEventListener("click", displayShape);
        box8.addEventListener("click", displayShape);
        box9.addEventListener("click", displayShape);
    } else {
        document.getElementById("turn").innerHTML = "Tie Game!"
    }
}

function test() {
    console.log("Clicked!")
}

function resetFunction() {
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
    document.getElementById("turn").innerHTML = "Player 1 Turn";
    counter = 0;
}
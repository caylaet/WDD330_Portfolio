import {mobile} from './modules/mobile.js';
import {localStorage} from './modules/localStorage.js';
import {desktop} from './modules/desktop.js';
import {uppercaseElement, loadGame, game} from './modules/variables.js';
import {setLetters} from './modules/setLetters.js';


/* Starts the game */
export function start(){

    //displays the game
    game.style.display = "block";
    //removes the display  of the start button
    loadGame.style.display ="none";
    //sets the first letter in the game to A
    uppercaseElement.innerHTML = "A";
    //sets up the lowercase letters and thier event listeners
    setLetters.lowercase("A");
    setEventListeners();
    //sets up local storage and the display
    localStorage.displayIncorrect();
    localStorage.setUp;
}

/* Sets up the event listeners for the game. For desktop and mobile */
function setEventListeners(){
    const boxes = document.getElementsByClassName("lowerCaseLetter");
    uppercaseElement.addEventListener("drop", desktop.drop);
    uppercaseElement.addEventListener("dragover", desktop.allowDrop);
    for (let i=0; i< boxes.length; i++){
        boxes[i].addEventListener('touchmove', mobile.onTouchMove);
        boxes[i].addEventListener('touchend', mobile.onTouchEnd);
        boxes[i].addEventListener('dragstart', desktop.drag);
    };
}



import { utilities } from "./utilities.js";
import { localStorage } from "./localStorage.js";
import { youDidIt, tryAgain, currentUppercaseLetter, incorrectLetters } from "./variables.js";

export const desktop ={

    /*Called when a lowercase letter is dropped on the uppercase letter. 
    Checks if the letter is correct or incorrect than calls the sound 
    associated with it */
    drop(ev){

        ev.preventDefault();

        //gets the lowercase letter dropped
        const lowercaseLetter = ev.dataTransfer.getData("text");
        const lowercaseLetterId = ev.dataTransfer.getData("id");
        const lowercaseLetterElement = utilities.getElement(lowercaseLetterId);
        lowercaseLetterElement.style.visibility = "hidden";

        //If the incorrect sound is playing stops and resets it
        tryAgain.pause();
        tryAgain.currentTime = 0;

        //Checks if it is correct than plays the sound assciated with it
        if(utilities.checkAnswer(lowercaseLetter)){
            youDidIt.play();
        }
        else{
            tryAgain.play();
            localStorage.recordIncorrect(currentUppercaseLetter());
            localStorage.displayIncorrect(incorrectLetters);
        }  
    },

    /*Called when a lowercase letter is first dragged */
    drag(ev){
        ev.dataTransfer.setData("text", ev.target.innerHTML);
        ev.dataTransfer.setData("id", ev.target.id);
    },

    /*Called when being dragged */
    allowDrop(ev){
        ev.preventDefault();
    }

}

import {tryAgain, youDidIt, currentUppercaseLetter, incorrectLetters} from "./variables.js";
import {localStorage} from "./localStorage.js";
import { utilities } from "./utilities.js";

export const mobile = {
    
    /* This will be called when the user puts their finger on the screen */
    onTouchMove(e){

        // grab the location of touch
        const touchLocation = e.targetTouches[0];
        const lowercase = e.target;
            
        // assign box new coordinates based on the touch.
        lowercase.style.left = touchLocation.pageX + 'px';
        lowercase.style.top = touchLocation.pageY + 'px';
    },

   /* This will be called when the user lifts their finger off the screen */ 
    onTouchEnd(e){
        //set up my variables
        const lowercase = e.target ;
        const lowercaseLetter = lowercase.innerHTML;

        //Get the current location of the letter
        const x = parseInt(lowercase.style.left);
        const y = parseInt(lowercase.style.top);

        //Check to see if they dropped it on the uppercase letter
        const result = checkPlacement(x,y);

        //If the sound it playing stop it and reset it
        tryAgain.pause();
        tryAgain.currentTime = 0;

        //If they dropped it on the uppercase letter and it is correct play the correct sound
        if(result && utilities.checkAnswer(lowercaseLetter)){
            resetBlock(lowercase);
            youDidIt.play();

        }
        //If they didn't drop it on the uppercase letter just reset the letter to its original place
        else if (!result){
            resetBlock(lowercase);
        }
        //If they dropped it on the uppercase letter but it was incorrect reset the letter to it's orginal place and play the incorrect soune
        else{
            resetBlock(lowercase);
            tryAgain.play();
            localStorage.recordIncorrect(currentUppercaseLetter());
            //update the display for any missed letters
            localStorage.displayIncorrect(incorrectLetters)
        }
    }
    
}

/* This is called to check to see if the position the user drops the letter 
is within a certain range of the uppercase letter */
function checkPlacement(x,y){
    if (x >= 150 && x <= 193 && y >= 30 && y <= 65) {
        return true;

    }else{
        return false
    }
};

/* This will reset the lowercase letter bock to its orginal place */
function resetBlock(letter){
    const id = letter.id;
    letter.style.top = 150 + 'px';
    switch(id){
        case 'optionOne':
            letter.style.left = 5 + '%';
            break;
        case 'optionTwo':
            letter.style.left = 30 + '%';
            break;
        case 'optionThree':
            letter.style.left = 55 + '%';
            break;
        case 'optionFour':
            letter.style.left = 80 + '%';
            break;
    }

}
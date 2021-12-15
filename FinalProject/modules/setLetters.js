import { localStorage } from './localStorage.js';
import {utilities} from './utilities.js';
import { currentUppercaseLetter, minNumber, maxNumber, uppercaseElement, game, endsound, incorrectLettersEnd} from './variables.js';


export const setLetters = {
    /* This funciton sets the next uppercase letter and lowercase letters */
    next(){
        const next = nextUppercaseLetter(currentUppercaseLetter());
        if(!next){
            end();

        }else{
            uppercaseElement.innerHTML = next;
            setLetters.lowercase(next);
        }
    },

    /* Sets up all the lowercase letters selects three random letters and than 
    randomizes where they are put */
    lowercase(upperCaseLetter){
        //gets the matching lowercase letter with the uppercase letter
        const lowercaseLetter = matchLowerLetter(upperCaseLetter);
        const numberOfRandom = 3;
        //gets three random letters
        const randomLetters = utilities.generateRandomNumbers(numberOfRandom,minNumber,maxNumber,[lowercaseLetter.charCodeAt(0)])
        //gets the elements of the lowercase letters
        const lowercaseLetters = document.getElementsByClassName("lowerCaseLetter");
        //randomly selects the position of the correct letter
        const optionNumber = Math.floor(4 * Math.random());
        let randomLettersPosition = 1;
        for (let i = 0; i < lowercaseLetters.length; i++){
            if(i === optionNumber){
                lowercaseLetters[i].innerHTML = lowercaseLetter;
                continue;
            }
            lowercaseLetters[i].innerHTML = String.fromCharCode(randomLetters[randomLettersPosition]);
            randomLettersPosition++;
        }

    }
}


/* Given a letter will return the next letter */
function nextUppercaseLetter(current){
    let nextUpper = current.charCodeAt(0);
    if (nextUpper < 90){
        nextUpper += 1;
        return String.fromCharCode(nextUpper);
    }else{
        return false;
    }
    
}
/* Given an uppercase letter will return the matching lowercase letter */
function matchLowerLetter(upper){
    let lowercase = upper.charCodeAt(0);
    lowercase += 32;
    return String.fromCharCode(lowercase);
}

/* This will end the game. Called after the last letter */
function end(){
    game.classList.remove("add");
    game.classList.add("removeAnimation");
    localStorage.displayIncorrect(incorrectLettersEnd);
    endsound.play();
    
}

import {utilities} from './utilities.js';
import { currentUppercaseLetter, minNumber, maxNumber, uppercaseElement} from './variables.js';


export const setLetters = {
    /* This funciton sets the next uppercase letter and lowercase letters */
    next(){
        const next = nextUppercaseLetter(currentUppercaseLetter());
        uppercaseElement.innerHTML = next;
        setLetters.lowercase(next);
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
    }else{
        nextUpper = 65;
    }
    return String.fromCharCode(nextUpper);
    
}
/* Given an uppercase letter will return the matching lowercase letter */
function matchLowerLetter(upper){
    let lowercase = upper.charCodeAt(0);
    lowercase += 32;
    return String.fromCharCode(lowercase);
}
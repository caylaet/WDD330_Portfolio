import { currentUppercaseLetter } from "./variables.js";

export const utilities = {

    /* This function will get any element by its id and return it. Since using modules 
    this doesn't really seem needed but when I was just typing up my code this was 
    very handy */
    getElement(id){
        const element = document.getElementById(id);
        return element;
    },

    /* Generates an array of random numbers between two numbers with no repeats */
    generateRandomNumbers(amountRandom,lower,higher,numberArray =[]) {
        for (let i = 0; i < amountRandom; i++){
            let generateRandom = Math.floor(Math.random() * lower + higher);
            while (numberArray.includes(generateRandom)){
                generateRandom = Math.floor(Math.random() * lower + higher);
            }
            numberArray.push(generateRandom);
        }
        return numberArray;
    },

    /* Checks if the lowercase dropped matches the current uppercase letter */
    checkAnswer(lowercaseLetter){
        if((lowercaseLetter.charCodeAt(0)) - (currentUppercaseLetter().charCodeAt(0))  == 32){
            return true;
        }
        else { return false;};
    }


}

